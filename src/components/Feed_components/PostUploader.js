import React from 'react'
import './Post_uploader.css'
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { BsArrowRightShort } from "react-icons/bs";
import {useForm} from '../../util/hooks'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import {FETCH_POSTS_QUERY} from '../../util/graphql'
import { useToasts } from 'react-toast-notifications'
import {Redirect} from 'react-router-dom'

function PostUploader({update}) {
    const { addToast } = useToasts()
    const {values, onChange, onSubmit} = useForm(createPostCallback, {
        body:''
    })

 debugger;
 const [createPost] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY
      });
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      update();
      values.body = '';
    },
    onError(err){
        const error = err.graphQLErrors[0].message
        err.graphQLErrors[0].extensions.exception.errors ? Object.keys(err.graphQLErrors[0].extensions.exception.errors).length > 0 && (
            (Object.values(err.graphQLErrors[0].extensions.exception.errors).map((value) => (
             <div key = {value} >
                 {addToast(value, { appearance: 'error' })}
             </div>
            ))) 
        ) : 
        
        addToast(err.graphQLErrors[0].message, { appearance: 'error' })
        if( error === "Invalid/Expired token"){
            <Redirect to='/login'/>
        }
    },
       
  });

  function createPostCallback() {
    createPost();
  }

    return (
        <div className="postUploder">
            <div className="post_type">
                <div className="type_first">
                    <BiShareAlt className="Icon_style" style = {{backgroundColor:"#EBB35E", color:"white"}}/>
                    <p>Share an update</p>
                </div>
                <div className="type_second">
                    <AiOutlineCamera className="Icon_style" style = {{backgroundColor:"#D498E9", color:"white"}}/>
                    <p>Upload a photo</p>
                </div>
                <div className="type_thired">
                    <BsPencil className="Icon_style" style = {{backgroundColor:"#DAF0F2", color:"white"}}/>
                    <p>Share a post</p>
                </div>
            </div>
            <div className="uploaderCard">
                <textarea placeholder="what's on your mind?"
                name="body"
                onChange={onChange}
                value={values.body}
                >

                </textarea>
                <div className="card_bottom">
                    <ImAttachment style = {{marginLeft:"20px"}}/>
                    <AiOutlineCamera style = {{marginLeft:"20px"}}/>
                    <button onClick = {onSubmit}>
                        Post
                        <BsArrowRightShort/>
                    </button>
                </div>
            </div>
        </div>
    )
}

const CREATE_POST_MUTATION = gql`
mutation createPost($body: String!){
    createPost(body: $body){
        id 
        body 
        createdAt 
        username
        likes{
            id 
            username 
            createdAt
        }
        likeCount
        comments{
            id 
            body 
            username 
            createdAt
        }
        commentCount
    }
}`
export default PostUploader

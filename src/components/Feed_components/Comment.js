import React, {useState} from 'react'
import "./Comment.css"
import { FiSend } from "react-icons/fi";
import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'
function Comment({user, post : {id}}) {
    const [comment, setComment]  = useState('')
    
    const [createComment] = useMutation(CREATE_COMMENT_MUTATION, {
        update(){
            setComment(' ')
        },
        variables : {postId: id, body: comment }
    })

    return (
        <div>
            <div className="Input">
                <input type="text" className="Input-text" placeholder="type your comment" name="body"
                onChange={event => setComment(event.target.value)}
                value={comment} ></input>
                <FiSend style={{paddingLeft : "10px", cursor:"pointer"}} onClick={createComment} disable ={comment.trim() === ""}/>
            </div>
        </div>
    )
}

const CREATE_COMMENT_MUTATION = gql`
    mutation($postId: String!, $body: String!){
        createComment(postId: $postId, body: $body){
                id
                comments{
                    id body createdAt username
                }
                commentCount
            }
    }
`
export default Comment

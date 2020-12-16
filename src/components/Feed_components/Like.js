import React, {useEffect, useState} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {Link} from 'react-router-dom'
import gql from 'graphql-tag'
import { VscHeart } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { useToasts } from 'react-toast-notifications'
//import { createBrowserHistory } from 'history';

function Like({user, post : {id, likes}}, props) {
    //const history = createBrowserHistory()
    const { addToast } = useToasts()
    const[liked, setLiked] = useState(false)

    useEffect(() => {
        if(user && likes.find(like => like.username === user.username)){
            setLiked(true)
        }else setLiked(false)
    },[user, likes])


    const likeButton = user ? (
        liked ? (
        <FaHeart style = {{cursor:"pointer"}}/>
        ):
        (<VscHeart style = {{cursor:"pointer"}}/>)
    ) : (
        <Link to = '/login' style = {{textDecoration:"none"}}>
        <VscHeart as = {Link} to = "/login" style = {{cursor:"pointer"}}/>
        </Link>
    )

    const [likePost] = useMutation(LIKE_POST_MUTATION, {
        variables: {postId: id},
        onError(err){
            window.location.reload();
            addToast(err.graphQLErrors[0].message, { appearance: 'error' }) 
        }
    })
    return (
        <div onClick = {likePost}>
            {likeButton}
        </div>
    )
}

const LIKE_POST_MUTATION = gql`
    mutation likePost($postId: ID!){
        likePost(postId: $postId){
            id
            likes{
                id username
            }
            likeCount
        }
    }
`

export default Like

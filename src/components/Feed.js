import React from 'react'
import './Feed.css'
import PostUploader from './Feed_components/PostUploader'
import Post from './Feed_components/Post'
import { useQuery } from '@apollo/react-hooks'
import {FETCH_POSTS_QUERY} from '../util/graphql'



function Feed(props) {
    const {loading, data, refetch} = useQuery(FETCH_POSTS_QUERY, {
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });


    return (
        <div className="feed">
            <PostUploader update = {() => refetch()} props = {props}/>
            {loading ? (
                <h1>Loading posts...</h1>
                ):(
                    data.getPosts && data.getPosts.map(post => (
                        <div key={post.id}>
                            <Post post = {post} props = {props}/>
                        </div> 
                    ))
               
                )
            } 
        </div>
    )
}



export default Feed

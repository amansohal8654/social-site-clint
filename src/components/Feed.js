import React from 'react'
import './Feed.css'
import Post_uploader from './Feed_components/Post_uploader'
import Post from './Feed_components/Post'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const FETCH_POSTS_QUERY = gql`
    {
        getPosts {
            id
            body
            createdAt
            username
            likeCount
            likes{
                username
            }
            commentCount
            comments{
                id
                username
                createdAt
                body
            }
        }
    }
    `

function Feed() {
    debugger
    const {
    loading,
    data
  } = useQuery(FETCH_POSTS_QUERY);

  const posts = data ? data.getPosts : []

    return (
        <div className="feed">
            <Post_uploader />
            {loading ? (
                <h1>Loading posts...</h1>
                ):(
                    posts && posts.map(post => (
                        <div key={post.id}>
                            <Post post = {post}/>
                        </div> 
                    ))
               
                )
            } 
        </div>
    )
}



export default Feed

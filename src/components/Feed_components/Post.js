import React from 'react'
import "./Post.css"
import Avatar from '@material-ui/core/Avatar';
import { VscHeart } from "react-icons/vsc";
import { FaRegComment } from "react-icons/fa";
import { Link } from 'react-router-dom'
import moment from 'moment'

function Post({post: {id,
    body,
    createdAt,
    username,
    likeCount,
    likes,
    commentCount,
    comments}}) {

        const likePost = () => {
            console.log("like post")
        }

        const commentPost = () => {
            console.log("comment post")
        }
    return (
        <div className = "post">
            <div className = "post_upper">
                <div className="post_user">
                    <Avatar 
                    alt="Remy Sharp" 
                    src="https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/56927231_575489852957227_851858930110824448_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=goaM8_uQ4iYAX8MyVgD&_nc_ht=scontent.fakl2-1.fna&oh=e8ff56aea5650d7953a0d09245aa67a1&oe=5FBFC1A5" 
                    className ="user_image"
                    />
                    <h3>{username}</h3>
                    <Link to={`/posts/${id}`} style = {{textDecoration:"none"}}>
                        <h5 style= {{paddingLeft:"20px", color:"#9EA5B9"}}>{moment(createdAt).fromNow(true)}</h5>
                    </Link>     
                </div>
                <div className="post_data">
                    <p>{body}</p>
                </div>
            </div>
            <div className = "comment_section">
                <div className = "like_comment_section">
                        <div className = "like_section">
                            <VscHeart onClick={likePost} style = {{cursor:"pointer"}}/>
                            <div style = {{paddingLeft : "10px"}}>{likeCount}</div>
                        </div>
                        <div className = "like_section">
                            <FaRegComment onClick={commentPost} style = {{cursor:"pointer"}}/>
                            <div style = {{paddingLeft : "10px"}}>{commentCount}</div>
                        </div>
                        
                    </div>
                {comments && comments.map( comment => (
                    <div key = {comment.id} className = "post_bottom">
                    <Avatar alt="Remy Sharp" src="" />
                        <div className = "comment_data">
                            <h3> {comment.username}</h3>
                            <p>{comment.body}</p>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default Post

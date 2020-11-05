import React from 'react'
import './Post_uploader.css'
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { BsArrowRightShort } from "react-icons/bs";

function post_uploader() {
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
                <textarea placeholder="what's on your mind?">

                </textarea>
                <div className="card_bottom">
                    <ImAttachment style = {{marginLeft:"20px"}}/>
                    <AiOutlineCamera style = {{marginLeft:"20px"}}/>
                    <button>
                        Post
                        <BsArrowRightShort/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default post_uploader

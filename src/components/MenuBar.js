import React, {useContext} from 'react'
import './MenuBar.css'
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom'
import {AuthContext} from '../context/auth'

function MenuBar() {
    const {user, logout} = useContext(AuthContext)
    return (
        <div className = "menuBar">
            <Link to= {user ? '/' : '/login'} className="left_menu">
                    <p>Ai</p>
            </Link>
            
            <div className="center_menu">
                <BiSearch className="center_icon" />
                <input placeholder="Search for people...."/>
            </div>
            {user ? (
            <div className="right_menu">
                <h2 style = {{paddingRight : "20px"}}>{user.username}</h2>
                <Link className="plus_at" onClick = {logout} to="/login">
                    Logout
                </Link>
            </div>
            ):
            <div className="right_menu">
                <Link className="plus_at" to="/login" style= {{marginRight: "20px"}}>
                    Login
                </Link>
                <Link className="plus_at" to="/register">
                    Register
                </Link>
            </div>
            }
            
        </div>
    )
}

export default MenuBar

import React from 'react'
import './MenuBar.css'
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom'

function MenuBar() {
    return (
        <div className = "menuBar">
            <Link to="/" className="left_menu">
                    <p>Ai</p>
            </Link>
            
            <div className="center_menu">
                <BiSearch className="center_icon" />
                <input placeholder="Search for people...."/>
            </div>
            <div className="right_menu">
                <Link className="plus_at" to="/login">
                    <p>Login</p>
                </Link>
                <Link className="three_at" to="/register">
                    <p>Register</p>
                </Link>
            </div>
        </div>
    )
}

export default MenuBar

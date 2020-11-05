import React from 'react'
import './Login.scss'

function Login() {
    return (
        <div className="form animated flipInX">
            <h2>Login To Your Account</h2>
            <form className="loginbox" autoComplete="off">
                <input placeholder="Username" type="text" id="username"></input>
                <input placeholder="Password" type="password" id="password"></input>
                <button id="submit">Login</button>
            </form>
        </div>
    )
}

export default Login

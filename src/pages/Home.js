import React from 'react'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import './Home.css'

function Home() {
    return (
        <div className = "home_body">
            <SideBar />
            <div className="home_second_section">
                <Feed />
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import './Home.css'

function Home(props) {
    return (
        <div className = "home_body">
            <div>
                 <SideBar />
            </div>
            <div className="home_second_section">
                <Feed props = {props}/>
            </div>
        </div>
    )
}

export default Home

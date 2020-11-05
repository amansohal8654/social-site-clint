import React from 'react'
import './SideBar.css'
import SidebarOption from './SidebarOption'
import { BsPerson } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { GoLocation } from "react-icons/go";
import { BiGroup } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { TiShoppingBag } from "react-icons/ti";

function SideBar() {
    return (
        <div className="sidebar">
            <SidebarOption title = "People" Icon = {BsPerson }/>
            <SidebarOption title = "Posts" Icon = {TiMessages}/>
            <SidebarOption title = "Location" Icon = {GoLocation }/>
            <SidebarOption title = "Groups" Icon = {BiGroup }/>
            <SidebarOption title = "Inbox" Icon = {AiOutlineMail }/>
            <SidebarOption title = "Jobs" Icon = {TiShoppingBag }/>
        </div>
    )
}

export default SideBar

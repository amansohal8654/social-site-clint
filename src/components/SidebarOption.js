import React from 'react'
import "./SidebarOption.css"

function SidebarOption({title, Icon}) {
    return (
        <div className="sidebarrow">
            {Icon && <Icon style = {{color: "#9EA5B9"}}/>}

             <p>{title}</p>
        </div>
    )
}

export default SidebarOption

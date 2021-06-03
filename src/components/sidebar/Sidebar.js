import React from 'react'
import './_sidebar.scss'
import {MdSubscriptions, MdExitToApp, MdThumbUp, MdHistory, MdLibraryBooks, MdHome, MdWatchLater} from "react-icons/md"

function Sidebar({sidebar, handleToggleSidebar}) {
    return (
        <nav className={sidebar? "sidebar open": "sidebar"} onClick={() => handleToggleSidebar()}>
            <li>
                <MdHome size={23}/>
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23}/>
                <span>Subscriptions</span>
            </li>
            <li>
                <MdThumbUp size={23}/>
                <span>Liked Videos</span>
            </li>
            <li>
                <MdLibraryBooks size={23}/>
                <span>Library</span>
            </li>
            <li>
                <MdHistory size={23}/>
                <span>History</span>
            </li>
            <li>
                <MdWatchLater size={23}/>
                <span>Watch later</span>
            </li>
            <hr/>
            <li>
                <MdExitToApp size={23}/>
                <span>Logout</span>
            </li>
            <hr/>
        </nav>
    )
}

export default Sidebar
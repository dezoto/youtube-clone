import React from 'react'
import './_sidebar.scss'
import {MdSubscriptions, MdExitToApp, MdThumbUp, MdHistory, MdLibraryBooks, MdHome, MdWatchLater} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/authAction';
import { Link } from 'react-router-dom';

function Sidebar({sidebar, handleToggleSidebar}) {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(log_out())
    }
    return (
        <nav className={sidebar? "sidebar open": "sidebar"} onClick={() => handleToggleSidebar()}>
            <Link to='/'>
                <li>
                    <MdHome size={23}/>
                    <span>Home</span>
                </li>
            </Link>  
            <Link to='/feed/subscriptions'>
                <li>
                    <MdSubscriptions size={23}/>
                    <span>Subscriptions</span>
                </li>
            </Link>
            
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
            <li onClick={logOutHandler}>
                <MdExitToApp size={23}/>
                <span>Logout</span>
            </li>
            <hr/>
        </nav>
    )
}

export default Sidebar

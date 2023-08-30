import React from 'react';
import {SidebarCategory} from "./SidebarList/SidebarCategory";

function Sidebar() {
    return (
        <div className='w-full p-1' style={{backgroundColor: '#2A3042'}}>
            <div className='text-white text-xl'>NEWS TECH</div>
            <ul>
                <li className=''><SidebarCategory/></li>
                <li className=''><SidebarCategory/></li>
                <li className=''><SidebarCategory/></li>
                <li className=''><SidebarCategory/></li>
                <li className=''><SidebarCategory/></li>
                <li className=''><SidebarCategory/></li>
            </ul>
        </div>
    );
}

export default Sidebar;

import React from 'react';
import {SidebarCategory} from "./SidebarList/SidebarCategory";

function Sidebar() {
    return (
        <div className='p-1 w-[250px]' style={{backgroundColor: '#2A3042'}}>
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

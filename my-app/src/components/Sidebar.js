import React from 'react';
import {SidebarCategory} from "./SidebarList/SidebarCategory";

function Sidebar() {
    return (
        <div>
            <ul>
                <li className='mb-1'><SidebarCategory/></li>
            </ul>
        </div>
    );
}

export default Sidebar;

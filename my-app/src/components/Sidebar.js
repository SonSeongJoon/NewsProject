import React from 'react';
import {SidebarCategory} from "./SidebarList/SidebarCategory";

function Sidebar() {
    return (
        <div>
            <ul className='border-2 grow h-[800px] w-3/4 p-1 shadow-lg rounded-2xl' style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                <li className='mb-1'><SidebarCategory/></li>
            </ul>
        </div>
    );
}

export default Sidebar;

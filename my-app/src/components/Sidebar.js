import React from 'react';
import {SidebarCategory} from "./SidebarList/SidebarCategory";

function Sidebar() {
    return (
        <div className='mt-5'>
            <ul>
                <SidebarCategory/>
            </ul>
        </div>
    );
}

export default Sidebar;

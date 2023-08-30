import React, {useState} from 'react';
import {SidebarCategory} from "./SideBar/SidebarList/SidebarCategory";
import {BsList} from "react-icons/bs";

function Sidebar({isSmallSide, toggleSmallSide}) {

    return (
        <div className='p-1 w-full bg-yellow-300' style={{ backgroundColor: '#2A3042' }}>
            <div className='flex justify-center items-center h-[55px]'>
            </div>
            <ul>
                <li><SidebarCategory isSmallSide={isSmallSide}/></li>
                <li><SidebarCategory isSmallSide={isSmallSide}/></li>
                <li><SidebarCategory isSmallSide={isSmallSide}/></li>
                <li><SidebarCategory isSmallSide={isSmallSide}/></li>
            </ul>
</div>
    );
}
export default Sidebar;

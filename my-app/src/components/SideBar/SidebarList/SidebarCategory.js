import {BsNewspaper} from "react-icons/bs";
import {ToggleButton} from "../../Icons/ToggleButton";
import {categories} from "../../Categories";
import {NewsCategoryItem} from "../../NewsCategoryItem";
import React, {useState} from "react";


export function SidebarCategory({isSmallSide, title}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className={`text-white flex cursor-pointer mb-3 ${isSmallSide ? 'items-center justify-center': 'ml-2'}`}
                 onClick={() => setIsOpen(!isOpen)}>
                <div className='flex items-center justify-center h-[30px]'>
                    <BsNewspaper size={20}/>
                    {!isSmallSide && <button className='ml-2 text-white text-md font-normal'>{title}</button>}
                </div>
            </div>
        </div>
    )
}
import {BsNewspaper} from "react-icons/bs";
import {ToggleButton} from "../../Icons/ToggleButton";
import {categories} from "../../Categories";
import {NewsCategoryItem} from "../../NewsCategoryItem";
import React, {useState} from "react";


export function SidebarCategory({isSmallSide}) {
    const [isOpen, setIsOpen] = useState(false);
    const dashboard = categories[0];
    return (
        <div>
            <div className='text-white flex items-center justify-center cursor-pointer mb-3'
                 onClick={() => setIsOpen(!isOpen)}>

                <div className='flex items-center justify-center h-[30px]'>
                    <BsNewspaper size={20}/>
                    {!isSmallSide && <button className='ml-2 text-white text-md font-normal'>뉴스</button>}
                </div>

                {/*{!isSmallSide && <ToggleButton isOpen={isOpen} />}*/}
            </div>

            {/*<div className={`ml-9 overflow-hidden transition-all ease-out duration-500 ${isOpen ? 'max-h-[450px]' : 'max-h-0'}`}>*/}
            {/*    {categories.map(category => (*/}
            {/*        <NewsCategoryItem key={category} category={category} Dashboard={dashboard}/>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    )
}
import {BsNewspaper} from "react-icons/bs";
import {ToggleButton} from "../ToggleButton";
import {categories} from "../Categories";
import {NewsCategoryItem} from "../NewsCategoryItem";
import React, {useState} from "react";

export function SidebarCategory() {
    const [isOpen, setIsOpen] = useState(false);
    const dashboard = categories[0];
  return (
     <>
         <div className='text-white flex p-3 items-center justify-between cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}>
             <div className='flex items-center'>
                 <BsNewspaper className='mx-2' size={20}/>
                 <button className='hidden md:block text-white text-xl font-bold'>뉴스</button>
             </div>
             <ToggleButton isOpen={isOpen}/>
         </div>
         <div
             className={`ml-9 overflow-hidden transition-all ease-out duration-500 ${isOpen ? 'max-h-[450px]' : 'max-h-0'}`}>
             {categories.map(category => (
                     <NewsCategoryItem key={category} category={category} Dashboard={dashboard}/>
             ))}
         </div>


     </>
  )
}
import {BsNewspaper} from "react-icons/bs";
import {ToggleButton} from "../ToggleButton";
import {categories} from "../Categories";
import {NewsCategoryItem} from "../NewsCategoryItem";
import React from "react";

export function SidebarCategory() {
    const [isOpen, setIsOpen] = React.useState(false);
    const dashboard = categories[0];
  return (
     <>
         <div className='flex p-1 items-center justify-between cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}>
             <div className='flex items-center'>
                 <BsNewspaper className='mx-2' size={20}/>
                 <button className='text-gray-700 text-xl font-bold'>뉴스</button>
             </div>
             <ToggleButton isOpen={isOpen}/>
         </div>
         <div
             className={`ml-9 overflow-hidden transition-all ease-out duration-700 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
             {isOpen && categories.map(category => (
                     <NewsCategoryItem key={category} category={category} Dashboard={dashboard}/>
             ))}
         </div>


     </>
  )
}
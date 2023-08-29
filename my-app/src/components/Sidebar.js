import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from "./Categories";
import { BsFillCaretDownFill, BsNewspaper, BsDot } from "react-icons/bs";

function Sidebar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const dashboard = categories[0];
    return (
        <div className='mt-5'>
            <ul>
                <div className='flex items-center border-2 justify-between'>
                    <div className='flex items-center'>
                        <BsNewspaper className='mx-2' size={20}/>
                        <button className='text-gray-700 text-xl font-bold' onClick={() => setIsOpen(!isOpen)}>뉴스</button>
                    </div>
                    <BsFillCaretDownFill className='mr-2' size={20} color='gray' />
                </div>
                <div className='ml-9'>
                    {isOpen && categories.map(category => (
                        <li key={category} className="flex items-center my-1">
                            <BsDot/>
                            <Link
                                to={category === dashboard ? '/'.toLowerCase() : `/${category.toLowerCase()}`}
                                className="text-gray-700 text-md hover:underline"
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}

export default Sidebar;

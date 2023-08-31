import {BsList} from "react-icons/bs";
import React from "react";

function Header({toggleSmallSide}) {
    return (
        <>
            <header className='flex h-16 border-[0.5px] border-gray-300 items-center'>
                <button onClick={toggleSmallSide}><BsList className='ml-3 text-3xl mr-9'/></button>
                <h1 className='text-3xl font-extrabold text-red-950'>SEOUL IR</h1>
            </header>
        </>
    )
}
export default Header;
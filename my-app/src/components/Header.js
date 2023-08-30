import {BsList} from "react-icons/bs";
import React from "react";

function Header({toggleSmallSide}) {
    return (
        <>
            <header className='flex h-16 flex border-2 border-b-black items-center justify-between'>
                <button onClick={toggleSmallSide}><BsList className='text-3xl'/></button>

                <h1 className='text-2xl font-bold'>navbar</h1>
            </header>
        </>
    )
}
export default Header;
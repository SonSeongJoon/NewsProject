import {BsChevronRight} from "react-icons/bs";

export function ToggleButton({isOpen}) {
    return (
        <div className='hidden md:block mr-2'>
            <BsChevronRight size={15} color='gray' className={`transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}/>
        </div>
    )
}
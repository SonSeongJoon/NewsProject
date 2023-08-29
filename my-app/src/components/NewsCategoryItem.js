import {BsDot} from "react-icons/bs";
import {Link} from "react-router-dom";

export function NewsCategoryItem({category, isDashboard}) {
    return (
        <li className='flex items-center my-1'>
            <BsDot/>
            <Link
                to={isDashboard ? '/'.toLowerCase() : `/${category.toLowerCase()}`}
                className='text-gray-700 text-md hover:underline cursor-pointer'
            >
                {category}
            </Link>
        </li>
    );
}
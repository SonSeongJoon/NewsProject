import {Link} from "react-router-dom";

export function NewsCategoryItem({category, Dashboard}) {
    const isDashboard = Dashboard === category
    return (
        <li>
            <Link
                to={isDashboard ? '/' : `/${category}`}
                className='flex items-center text-white text-md hover:underline cursor-pointer my-1.5 ml-3'
            >
                {category}
            </Link>
        </li>
    );
}
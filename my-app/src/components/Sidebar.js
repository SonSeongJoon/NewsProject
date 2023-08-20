// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ onCategorySelect }) {
    const categories = ['Dashboard', 'society', 'politics', 'economic'];

    return (
        <div className='mt-5'>
            <ul>
                {categories.map(category => (
                    <li key={category} className="mb-2">
                        <Link
                            to={`/${category.toLowerCase()}`}
                            className="text-gray-700 text-xl font-bold hover:underline"
                            onClick={() => onCategorySelect(category.toLowerCase())}
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Sidebar;

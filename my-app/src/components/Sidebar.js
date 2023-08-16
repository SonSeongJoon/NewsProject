// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ onCategorySelect }) {
    const categories = ['Dashboard', 'Technology', 'Health', 'Sports', 'Finance', 'Entertainment'];

    return (
        <aside className="sidebar border-r p-5">
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
        </aside>
    );
}

export default Sidebar;

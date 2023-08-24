// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const categories = ['Dashboard', 'society', 'politics', 'economic', 'foreign'];
  return (
      <div className='mt-5'>
        <ul>
          {categories.map(category => (
              <li key={category} className="mb-2">
                <Link
                    to={category === 'Dashboard' ? '/'.toLowerCase() : `/${category.toLowerCase()}`}
                    className="text-gray-700 text-xl font-bold hover:underline"
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

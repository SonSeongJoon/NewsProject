// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import {categories} from "./Categories";

function Sidebar() {
    const dashboard = categories[0];
  return (
      <div className='mt-5'>
        <ul>
          {categories.map(category => (
              <li key={category} className="mb-2">
                <Link
                    to={category === dashboard ? '/'.toLowerCase() : `/${category.toLowerCase()}`}
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

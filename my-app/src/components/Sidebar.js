function Sidebar({ onCategorySelect }) {
    const categories = ['Technology', 'Health', 'Sports', 'Finance', 'Entertainment'];

    return (
        <aside className="sidebar border-r p-5">
        <ul>
                {categories.map(category => (
                    <li key={category} className="mb-2">
                        <p
                            className="text-gray-700 text-xl font-bold hover:underline"
                            onClick={() => onCategorySelect(category)}
                        >
                            {category}
                        </p>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;

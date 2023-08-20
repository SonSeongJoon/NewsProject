import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import {useState} from "react";

function Layout({children}) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <div
                className='flex w-full max-w-screen-xl mx-auto h-screen overflow-y-auto'> {/* added h-screen and overflow-y-auto */}
                <header className='flex flex-col sticky top-0 w-1/5 bg-white h-full'>
                    <Header/>
                    <Sidebar onCategorySelect={handleCategorySelect}/>
                </header>
                <main className='m-3 w-4/5'>
                    <div className=' overflow-y-auto h-full'>
                        {children}
                    </div>
                </main>

            </div>
        </>
    );
}

export default Layout;

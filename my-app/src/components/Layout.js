import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import {useState} from "react";

function Layout({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };


    return (
        <html>
        <body className='flex flex-col w-full max-w-screen-xl mx-auto'>
        <header className='sticky top-0 bg-white z-10 border-b'>
            <Header />
        </header>
        <div className='flex-grow flex'>
            <Sidebar onCategorySelect={handleCategorySelect}/>
            <main className='grow m-5'>{children}</main>
        </div>
        <Footer />
        </body>
        </html>
    );
}

export default Layout;

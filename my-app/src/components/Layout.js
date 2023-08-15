import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";


function Layout({children}) {
    const handleCategorySelect = (category) => {
        console.log(`Selected Category: ${category}`);
        // 여기에 카테고리별 뉴스를 불러오는 로직을 추가하면 됩니다.
    };

    return (
        <html>
        <body className='flex flex-col w-full max-w-screen-xl mx-auto'>
        <header className='sticky top-0 bg-white z-10 border-b'>
            <Header/>
        </header>
        <div className='flex-grow flex'>
            <Sidebar onCategorySelect={handleCategorySelect}/>
            <main className='grow m-5'>{children}</main>
        </div>
        <Footer/>
        </body>
        </html>
    );
}
export default Layout;
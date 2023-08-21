import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return (
        <>
            <div
                className='flex w-full max-w-screen-xl mx-auto h-screen overflow-y-auto'> {/* added h-screen and overflow-y-auto */}
                <header className='flex flex-col sticky top-0 w-1/5 bg-white h-full'>
                    <Header/>
                    <Sidebar/>
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

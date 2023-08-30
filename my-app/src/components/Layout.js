import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return (
        <>
            <div
                className='flex w-full h-screen overflow-y-auto'>
                <side className='flex flex-col sticky top-0 w-[250px] h-full' style={{backgroundColor: '#2A3042'}}>
                    <div><Header/></div>
                    <div><Sidebar/></div>
                </side>
                <main className='grow'>
                    <div className='overflow-y-auto h-full'>
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
export default Layout;

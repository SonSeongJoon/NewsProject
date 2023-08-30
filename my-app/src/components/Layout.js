import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return (
        <>
            <div className='flex w-full h-screen'>
                <Sidebar/>
                <div className='flex grow flex-col'>
                    <Header/>
                    <div className='ml-10 overflow-y-auto h-full'>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;

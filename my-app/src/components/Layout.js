import Header from "./Header";
import Sidebar from "./Sidebar";
import {useWindowResize} from "./SideBar/useWindowResize";
import {useState} from "react";

function Layout({children}) {
    const [isSmallSide, setIsSmallSide] = useState(false);  // 초기 상태를 false로 설정

    const toggleSmallSide = () => {
        setIsSmallSide(!isSmallSide);  // 상태를 반전
    };
    return (
        <>
            <div className='flex flex-col w-full h-screen'>
                <div>
                    <Header toggleSmallSide={toggleSmallSide}/>
                </div>
                <div className='flex flex-1 '>

                    <aside className={`flex h-full ${isSmallSide ? 'w-[85px]' : 'w-[130px]'}`}>
                        <Sidebar isSmallSide={isSmallSide}/>
                    </aside>

                    <div className='grow ml-10 overflow-y-auto h-[calc(100vh-4rem)]'>
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

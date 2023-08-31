import Header from "./Header";
import Sidebar from "./Sidebar";
import {useState} from "react";

function Layout({children}) {
    const [isSmallSide, setIsSmallSide] = useState(false);  // 초기 상태를 false로 설정

    const toggleSmallSide = () => {
        setIsSmallSide(!isSmallSide);  // 상태를 반전
    };

    return (
        <>
            <div className='flex flex-col h-screen overflow-x-scroll'>
                <div>
                    <Header toggleSmallSide={toggleSmallSide}/>
                </div>
                <div className='flex flex-1'>
                    <aside className={`fixed pt-10 flex h-full ${isSmallSide ? 'w-[60px]' : 'w-[140px]'}`} style={{ backgroundColor: '#2A3042' }}>
                        <Sidebar isSmallSide={isSmallSide}/>
                    </aside>
                    <div className={`${isSmallSide ? 'ml-[60px]': 'ml-[140px]'} w-[1460px]  flex flex-row`}>
                        {/* 가로로 삼등분 영역 */}
                        <div className={`w-[320px] bg-red-400`}>
                            영역 1
                        </div>
                        <div className={`w-[713px] p-3 bg-green-400 overflow-y-auto h-[calc(100vh-4.5em)]`}>
                            {children}
                        </div>
                        <div className={`w-[325px] bg-blue-400`}>
                            영역 3
                        </div>
                        {/* 가로로 삼등분 영역 끝 */}
                    </div>
                </div>
            </div>
        </>
    );
}



export default Layout;

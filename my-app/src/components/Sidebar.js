import {SidebarCategory} from "./SideBar/SidebarList/SidebarCategory";

function Sidebar({isSmallSide}) {

    return (
        <div className='w-full'>
            <ul>
                <li><SidebarCategory isSmallSide={isSmallSide} title='뉴스 모니터링'/></li>
                <li><SidebarCategory isSmallSide={isSmallSide} title='뉴스 브리핑'/></li>
                <li><SidebarCategory isSmallSide={isSmallSide} title='뉴스 분석'/></li>
                <li><SidebarCategory isSmallSide={isSmallSide} title='보도 자료'/></li>
            </ul>
        </div>
    );
}

export default Sidebar;

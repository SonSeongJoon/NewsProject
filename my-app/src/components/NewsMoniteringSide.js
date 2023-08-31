import {BsBell, BsBookmark, BsFolder, BsFillCaretDownFill, BsPlusSquareFill} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai"
import {useState} from "react";

export function NewsMoniteringSide() {
    const [isOpen, setIsOpen] = useState(false); // 토글 상태를 관리할 상태 변수
    const [keywords, setKeywords] = useState([]);
    const [showInput, setShowInput] = useState(false); // 입력창의 상태를 관리
    const [newKeyword, setNewKeyword] = useState(""); // 입력된 새 키워드를 관리
    const toggleList = () => {
        setIsOpen(!isOpen); // 상태 토글
    };

    const toggleInput = () => {
        setShowInput(!showInput); // 입력창 토글
    };

    const handleInputChange = (e) => {
        setNewKeyword(e.target.value); // 입력값 상태 업데이트
    };

    const addKeyword = () => {
        if (newKeyword.trim() !== "") {
            setKeywords([...keywords, newKeyword]); // 새 키워드 추가
        }
        setNewKeyword(""); // 입력 초기화
        toggleInput(); // 입력창 숨기기
    };

    return (
        <div className='w-[200px]'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-bold'>뉴스 모니터링</h1>
                <div className='flex flex-col mt-3'>
                    <p className='flex items-center mb-2'><BsBell className='mr-2'/>알림 설정</p>
                    <p className='flex items-center'><BsBookmark className='mr-2'/>저장한 뉴스</p>
                </div>
            </div>
            <br/>
            <hr className='border-t-2 border-red-900'/>
            <br/>
            <div className='flex justify-between'>
                <h3 className='font-bold text-sm'>키워드 그룹</h3>
                <p>정렬</p>
            </div>
            <div>
                <span className='flex items-center px-2 hover:bg-blue-300 hover:bg-opacity-30 rounded-lg justify-between'>
                    <div className='flex items-center cursor-pointer' onClick={toggleList}>
                        <BsFillCaretDownFill className='text-sm mr-2'/>
                        <BsFolder className='mr-1'/>
                        <h1 className='font-semibold p-2'>자사 뉴스</h1>
                    </div>
                    <div className='flex text-sm p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg' onClick={toggleInput}>
                        <AiOutlinePlus/>
                    </div>
                </span>
                {/* 하위 리스트 */}
                <ul className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
                    {keywords.map((keyword, index) => (
                        <li key={index} className='ml-8'>{keyword}</li>
                    ))}
                </ul>
                {/* 입력창 */}
                {showInput && (
                    <div className="flex items-center mt-2">
                        <input type="text" value={newKeyword} onChange={handleInputChange} className="w-[150px] p-1 border" placeholder='키워드를 입력하세요'/>
                        <button onClick={addKeyword} className="ml-2">추가</button>
                    </div>
                )}
            </div>
            <div className='ml-5 mt-5 flex items-center text-gray-600'>
                <BsPlusSquareFill className='rounded-md text-xl mr-2'/>
                <button>새로운 키워드 그룹</button>
            </div>
        </div>
    );
}

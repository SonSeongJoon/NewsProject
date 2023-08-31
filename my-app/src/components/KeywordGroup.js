import {BsFillCaretRightFill, BsFolder} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";

export function KeywordGroup({isOpen, toggleList, showInput, toggleInput, keywords, newKeyword, handleInputChange, addKeyword}) {
    return (
        <>
            <div>
      <span className='flex items-center px-2 hover:bg-blue-300 hover:bg-opacity-30 rounded-lg justify-between'>
        <div className='flex items-center cursor-pointer' onClick={toggleList}>
          <BsFillCaretRightFill className={`text-sm mr-2 ${isOpen ? 'duration-300 ease-in-out rotate-90' : ''}`}/>
          <BsFolder className='mr-1'/>
          <h1 className='font-semibold p-2'>자사 뉴스</h1>
        </div>
        <div className='flex text-sm p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg' onClick={toggleInput}>
          <AiOutlinePlus/>
        </div>
      </span>
                <ul className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
                    {keywords.map((keyword, index) => (
                        <li key={index} className='ml-8'># {keyword}</li>
                    ))}
                </ul>
            </div>
            {/* 입력창 */}
            {showInput && isOpen && (
                <div className="flex items-center mt-2">
                    <input type="text" value={newKeyword} onChange={handleInputChange} className="w-[150px] p-1 border"
                           placeholder='키워드를 입력하세요'/>
                    <button onClick={addKeyword} className="ml-2">추가</button>
                </div>
            )}
        </>

    );
}

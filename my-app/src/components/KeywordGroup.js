import {BsFillCaretRightFill, BsFolder, BsThreeDots} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {FixKeywordGroupName} from "./popup/FixKeywordGroupName";
import {useState} from "react";


export function KeywordGroup({
                                 isOpen,
                                 toggleList,
                                 showInput,
                                 toggleInput,
                                 keywords,
                                 newKeyword,
                                 handleInputChange,
                                 addKeyword
                             }) {
    const [groupTitle, setGroupTitle] = useState("자사 뉴스");
    const [fixGroupTitle, setFixGroupTitle] = useState(false)

    const handleSaveTitle = (newTitle) => {
        setGroupTitle(newTitle)
    }
    const handleTreeDots = () => {
        setFixGroupTitle(!fixGroupTitle)
    }



    return (
        <>
            <div>
                <div
                    className='flex items-center px-2 hover:bg-blue-300 hover:bg-opacity-30 rounded-lg justify-between'>
                    <div className='flex items-center mr-2'>
                        <BsFillCaretRightFill
                            className={`cursor-pointer text-sm mr-2 ${isOpen ? 'duration-300 ease-in-out rotate-90' : ''}`}
                            onClick={toggleList}/>
                        <BsFolder className='mr-1'/>
                        <h1 className='font-semibold p-2'>{groupTitle}</h1>
                    </div>
                    <div onClick={handleTreeDots}>
                        <BsThreeDots/>
                    </div>
                    <div className='flex text-sm p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg'
                         onClick={toggleInput}>
                        <AiOutlinePlus/>
                    </div>
                </div>
                <div>
                    <ul className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
                        {keywords.map((keyword, index) => (
                            <li key={index} className='ml-8'># {keyword}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 입력창 */}
            {(showInput) && (
                <div className="flex items-center mt-2">
                    <input type="text" value={newKeyword} onChange={handleInputChange} className="w-[150px] p-1 border"
                           placeholder='키워드를 입력하세요'/>
                    <button onClick={addKeyword} className="ml-2">추가</button>
                </div>
            )}
            {fixGroupTitle && <FixKeywordGroupName initialTitle={groupTitle} onSave={handleSaveTitle}/>}

        </>
    );
}

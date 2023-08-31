import {
    BsPlusSquareFill
} from "react-icons/bs";
import {useState} from "react";
import {KeywordGroup} from "./KeywordGroup";

export function NewsMoniteringSide() {
    const [groupList, setGroupList] = useState([
        {
            id: new Date().getTime(),
            isOpen: false,
            keywords: ['카카오', '네이버'],
            showInput: false,
            newKeyword: ""
        }
    ]);

    const addNewGroup = () => {
        const newGroup = {
            id: new Date().getTime(),
            isOpen: false,
            keywords: [],
            showInput: false,
            newKeyword: ""
        };
        setGroupList([...groupList, newGroup]);
    }
    const updateGroup = (id, changes) => {
        setGroupList(groupList.map(group => group.id === id ? {...group, ...changes} : group));
    };

    return (
        <div className='w-[200px]'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-bold'>뉴스 모니터링</h1>
            </div>
            <br/>
            <hr className='border-t border-red-900'/>
            <br/>
            <div className='flex justify-between'>
                <h3 className='font-bold text-sm'>키워드 그룹</h3>
                <p>정렬</p>
            </div>
            {groupList.map((group, index) => (
                <KeywordGroup
                    key={group.id}
                    isOpen={group.isOpen}
                    toggleList={() => updateGroup(group.id, {isOpen: !group.isOpen})}
                    showInput={group.showInput}
                    toggleInput={() => updateGroup(group.id, {showInput: !group.showInput, isOpen: !group.isOpen})}
                    keywords={group.keywords}
                    newKeyword={group.newKeyword}
                    handleInputChange={(e) => updateGroup(group.id, {newKeyword: e.target.value})}
                    addKeyword={() => {
                        if (group.newKeyword.trim() !== "") {
                            updateGroup(group.id, {
                                keywords: [...group.keywords, group.newKeyword],
                                newKeyword: ""
                                });
                            }
                        }
                    }
                />
            ))}
            <div className='ml-5 mt-5 flex items-center text-gray-600'>
                <BsPlusSquareFill className='rounded-md text-xl mr-2'/>
                <button onClick={addNewGroup}>새로운 키워드 그룹</button>
            </div>
        </div>
    );
}

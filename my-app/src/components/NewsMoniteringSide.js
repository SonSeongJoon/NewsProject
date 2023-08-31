import {BsBell, BsBookmark, BsFolder, BsFillCaretDownFill, BsPlusSquareFill} from "react-icons/bs";

export function NewsMoniteringSide() {
    return (
        <div className='w-[200px]'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-bold'>뉴스 모니터링</h1>
                <div className='flex flex-col mt-3'>
                    <p className='flex items-center'><BsBell/>알림 설정</p>
                    <p className='flex items-center'><BsBookmark/>저장한 뉴스</p>
                </div>

            </div>
            <br/>
            <hr className='border-black'/>
            <br/>
            <div className='flex justify-between'>
                <h3 className='font-bold text-sm'>키워드 그룹</h3>
                <p>정렬</p>
            </div>
            <div>
                <div className='flex items-center bg-blue-300 bg-opacity-30 rounded-lg px-2'>
                    <BsFillCaretDownFill className='text-sm mr-2'/>
                    <BsFolder className='mr-1'/>
                    <h1 className='font-semibold p-2'>자사 뉴스</h1>
                </div>

                <ul>
                    <li className='ml-8'># 토스</li>
                    <li className='ml-8'># 네이버</li>
                    <li className='ml-8'># 카카오</li>
                </ul>
            </div>
            <div className='mt-5 flex items-center text-gray-600'>
                <BsPlusSquareFill className=' rounded-md text-xl mr-2'/>
                <button>새로운 키워드 그룹</button>
            </div>


        </div>
    )
}
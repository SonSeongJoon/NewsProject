import React, {useState} from 'react';

export function FixKeywordGroupName({initialTitle, onSave}) {
    const [title, setTitle] = useState(initialTitle);

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSave = () => {
        onSave(title);
    };

    return (

            <div className="popup">
                <div className="popup-inner">
                    <h2>제목 변경</h2>
                    <input
                        type="text"
                        value={title}
                        onChange={handleInputChange}
                        placeholder="새 제목을 입력하세요."
                    />
                    <button onClick={handleSave}>저장</button>
                </div>
            </div>
    );
}

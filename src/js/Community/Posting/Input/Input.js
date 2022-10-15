import React from 'react';
import './Input.scss';

const Input = () => {
    return (
        <div>
            <div>
                <input id="input-title" type="text" placeholder='제목_30자 이내 작성'></input>
            </div>
            <div>
                <input id="input-detail" type="text" placeholder='5000자 이내 작성'></input>
            </div>
        </div>
    );
}

export default Input;
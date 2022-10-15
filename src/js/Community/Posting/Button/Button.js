import React from 'react';
import './Button.scss';

const cancel = () => {
    console.log("cancel");
}
const upload = () => {
    console.log("upload");
}

const Button = () => {
    return (
        <div className="buttons">
            <button id="cancel" onClick={cancel}>취소하기</button>
            <button id="upload" onClick={upload}>글올리기</button>
        </div>
    );
}

export default Button;
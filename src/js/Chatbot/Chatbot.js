import './Chatbot.css';
import chatbot_image from '../../images/chatbot.svg';
import three_dots from '../../images/three_dots.svg';
import close from '../../images/close.svg';
import { useState } from 'react';

function Chatbot() {
    const [isClick, setIsClick] = useState(false);
    return (
        <div id="chatbot">
            {isClick ?
                <div id="chatbot-container">
                    <div id="chatbot-header">
                        프로틴
                        <div id="chatbot-header-buttons">
                            <img id="chatbot-settings" src={three_dots} alt="settings" />
                            <img id="chatbot-close" src={close} alt="close" onClick={() => setIsClick(false)} />
                        </div>
                    </div>
                    <div id="chatbot-section"></div>
                    <div id="chatbot-message">
                        <input placeholder="글을 입력해주세요." />
                    </div>
                </div> : <div id="chatbot-button" onClick={() => setIsClick(true)}>
                    <div>챗봇</div>
                    <img src={chatbot_image} alt="chatbot" />
                </div>}
        </div>
    );
}

export default Chatbot;
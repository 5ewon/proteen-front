import './Chatbot.css';
import chatbot_image from '../../images/chatbot.svg';

function Chatbot(){
    return(
        <div id="chatbot">
            <div>챗봇</div>
            <img src={chatbot_image} alt="chatbot" />
        </div>
    );
}

export default Chatbot;
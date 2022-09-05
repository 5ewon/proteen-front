import './Function.css';
import membership from 'images/Function/membership.svg';
import schedule from 'images/Function/schedule.svg';
import planning from 'images/Function/planning.svg';
import chatbot from 'images/Function/chatbot.svg';

function functions() {
    return(
        <div className="introduce-containers">
            <h3 id="introduce-function">기능소개</h3>
            <div id="introduce-functions-wrap">
                <div>
                    <div>
                        <div>
                            <img src={membership} />
                            회원관리
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={schedule} />
                            계시판 이용
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={planning} />
                            플래너 작성
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={chatbot} />
                            인공지능 챗봇
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default functions;
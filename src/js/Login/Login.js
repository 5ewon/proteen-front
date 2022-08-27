import './Login.css';
import logo from '../../images/logo.png';

function Login() {
    return (
        <div id="login-page">
            <div id="login-section">
                <div>
                    <div id="login-contents">
                        <h6>SW 독학 교육 지원 시스템</h6>
                        <img src={logo} alt="logo" />
                        <div id="login-division-line"></div>
                        <div>
                            소중한 경험을 공유해주세요!<br />
                            SW 독학은 프로틴에서
                        </div>
                    </div>
                </div>
                <div>
                    <div id="login-inputs">
                        <form>
                            <div>
                                <div>아이디</div>
                                <input placeholder='아이디를 입력해주세요.' />
                            </div>
                            <div>
                                <div>비밀번호</div>
                                <input placeholder='비밀번호를 입력해주세요.' />
                            </div>
                            <input type="submit" value="로그인" />
                        </form>
                        <input type="button" value="계정이 없으신가요?" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
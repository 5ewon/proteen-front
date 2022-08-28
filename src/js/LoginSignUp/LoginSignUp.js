import logo from '../../images/logo.svg';
import './LoginSignUp.css';

function LoginSignUp({children}) {
    return (
        <div id="login-signup-page">
            <div id="login-signup-section">
                <div>
                    <div id="login-signup-contents">
                        <h6>SW 독학 교육 지원 시스템</h6>
                        <img src={logo} alt="logo" />
                        <div id="login-signup-line"></div>
                        <div>
                            소중한 경험을 공유해주세요!<br />
                            SW 독학은 프로틴에서
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default LoginSignUp;
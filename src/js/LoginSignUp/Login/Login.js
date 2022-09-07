import LoginSignUp from 'js/LoginSignUp/LoginSignUp';
import './Login.scss';

function Login() {
    return (
        <LoginSignUp>
            <div id="login-section">
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
        </LoginSignUp>
    );
}

export default Login;
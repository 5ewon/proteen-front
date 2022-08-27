import './SignUp.css';
import logo from '../../images/logo.png';

function SignUp() {
    return (
        <div id="signup-page">
            <div id="signup-section">
                <div>
                    <div id="signup-contents">
                        <h6>SW 독학 교육 지원 시스템</h6>
                        <img src={logo} alt="logo" />
                        <div id="signup-division-line"></div>
                        <div>
                            소중한 경험을 공유해주세요!<br />
                            SW 독학은 프로틴에서
                        </div>
                    </div>
                </div>
                <div>
                    <div id="signup-inputs">
                        <form>
                            <div>
                                <div>이메일</div>
                                <input placeholder='이메일을 입력해주세요.' />
                            </div>
                            <div>
                                <div>아이디</div>
                                <input placeholder='아이디를 입력해주세요.' />
                            </div>
                            <div>
                                <div>비밀번호</div>
                                <input placeholder='영문자, 숫자, 특수문자 포함 최소 8자' />
                                <input placeholder='영문자, 숫자, 특수문자 포함 최소 8자' />
                            </div>
                            <div id="terms">
                                <label>
                                    <input type="checkbox" />
                                    전체동의
                                </label>
                                <div id="signup-checkbox-division-line"></div>
                                <label>
                                    <input type="checkbox" />
                                    [필수] 이용약관 동의
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    [필수] 프로틴 개인정보 수집 및 이용 동의
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    [선택] 광고 수신 동의
                                </label>
                            </div>
                            <input type="submit" value="회원가입" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
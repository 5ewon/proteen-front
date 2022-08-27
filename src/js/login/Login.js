import logo from '../../images/logo.png';

function Login(){
    return(
        <div>
            <div>
                <div>
                    <h1>SW 독학 교육 지원 시스템</h1>
                    <img src={logo} alt="logo" />
                    <div>
                        소중한 경험을 공유해주세요!<br />
                        SW 독학은 프로틴에서
                    </div>
                </div>
                <div>
                    <form>
                        <div>
                            아이디
                            <input placeholder='아이디를 입력해주세요' />
                        </div>
                        <div>
                            비밀번호
                            <input placeholder='비밀번호를 입력해주세요' />
                        </div>
                        <input type="submit" value="로그인" />
                    </form>
                    <input type="button" value="계정이 없으신가요?" />
                </div>
            </div>
        </div>
    );
}

export default Login;
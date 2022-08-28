import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

function Header({isLogined}) {
    // 로그인이 됐다면 home-login 삭제 로직 구현
    return (
        <header id="header">
            <ul id="header-wrap">
                <li id="header-logo"><img src={logo} alt="logo" /></li>
                <li>이주의 공부법</li>
                <li>플래너</li>
                <li>커뮤니티</li>
                <li>
                    <Link to="/introduce">소개</Link>
                </li>
            </ul>
            {isLogined ?
                <ul id="header-notice-profile">
                    <li></li>
                    <li></li>
                </ul>
                : <ul id="header-login-signup">
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            }
        </header>
    );
}

export default Header;
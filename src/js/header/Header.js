import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

function Header({isLogined}) {
    // 로그인이 됐다면 home-login 삭제 로직 구현
    return (
        <header id="header">
            <ul id="wrap-header">
                <li id="logo"><img src={logo} alt="logo" /></li>
                <li id="studyMethod">이주의 공부법</li>
                <li id="planner">플래너</li>
                <li id="community">커뮤니티</li>
                <li id="introduce">
                    <Link to="/introduce">소개</Link>
                </li>
            </ul>
            {isLogined ?
                <ul id="notice-profile">
                    <li></li>
                    <li></li>
                </ul>
                : <ul id="home-login">
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            }
        </header>
    );
}

export default Header;
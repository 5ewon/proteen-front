import { Link } from 'react-router-dom';

import './Header.scss';
import logo from 'images/logo.svg';
import bell from 'images/Profile/bell.svg';

function Header({isLogined}) {
    // 로그인이 됐다면 home-login 삭제 로직 구현
    return (
        <header id="header">
            <ul id="header-wrap">
                <li id="header-logo">
                    <Link to="home"><img src={logo} alt="logo" /></Link>
                </li>
                <li>
                    <Link to="twoweeksstudy">이 주의 공부법</Link>
                </li>
                <li>
                    <Link to="planner">플래너</Link>
                </li>
                <li>
                    <Link to="community">커뮤니티</Link>
                </li>
                <li>
                    <Link to="/introduce">소개</Link>
                </li>
            </ul>
            {isLogined ?
                <ul id="header-notice-profile">
                    <li>
                        <Link to="profile">
                            <span id="header-user-id">아무개</span>님
                        </Link>
                    </li>
                    <li><img src={bell} alt="notice" /></li>
                </ul>
                : <ul id="header-login-signup">
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                    <li>
                        <Link to="/signup">회원가입</Link>
                    </li>
                </ul>
            }
        </header>
    );
}

export default Header;
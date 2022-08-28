import { useRef, useState } from 'react';
import './FirstPage.css';
import logo from '../../../images/logo.png';
import FirstPageBG from '../../../images/introduce_first_page_bg.png'

function FirstPage({isLogined}) {
    const scrollSign = useRef(null);
    const [scrollOpacity, setScrollOpacity] = useState(false);

    window.addEventListener('scroll', e => {
        window.scrollY > 10 ? // 10이상으로 스크롤하면 scroll아이콘 지우기
            setScrollOpacity(true)
            : setScrollOpacity(false)
    });

    if (scrollOpacity)
        setTimeout(() => scrollSign.current.classList.add('introduce-remove'), 0);
    else
        setTimeout(() => scrollSign.current.classList.remove('introduce-remove'), 0);

    return (
        <div className="introduce-containers">
            <div id="introduce-login">
                <img id="introduce-logo" src={logo} alt="logo" />
                {isLogined ? null :
                    <div id="introduce-login-signup">
                        <input type="button" value="로그인" />
                        <input type="button" value="회원가입" />
                    </div>
                }
            </div>
            <div id="introduce-scroll-icon" ref={scrollSign}>
                스크롤하기
                <div id="introduce-mouse">
                    <div id="introduce-wheel"></div>
                </div>
            </div>
            <img id="introduce-bg-img" src={FirstPageBG} alt="background" />
        </div>
    )
}

export default FirstPage;
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
        setTimeout(() => scrollSign.current.classList.add('ScrollRemove'), 0);
    else
        setTimeout(() => scrollSign.current.classList.remove('ScrollRemove'), 0);

    return (
        <div className="IntroduceContainers">
            <div id="introduce-login-wrap">
                <img id="introduce-first-page-logo" src={logo} alt="logo" />
                {isLogined ? null :
                    <div id="introduce-login-signup-buttons">
                        <input type="button" value="로그인" />
                        <input type="button" value="회원가입" />
                    </div>
                }
            </div>
            <div id="scroll-sign" ref={scrollSign}>
                스크롤하기
                <div id="mouse-body">
                    <div id="scroller"></div>
                </div>
            </div>
            <img id="background-img" src={FirstPageBG} alt="background" />
        </div>
    )
}

export default FirstPage;
import './ThisMonthBenefit.scss';

function ThisMonthBenefit() {
    return (
        <div id="tier-benefits">
            <h6><span className="user-name"></span>님의 이번 달 등급과 혜택</h6>
            <div>
                <fieldset>
                    <legend>등급명</legend>
                    <ul>
                        <li>
                            <img src="" alt="코인" />
                            매달 15일 100g 추가 적립
                        </li>
                        <li>
                            <img src="" alt="하트이미지" />
                            본인 작섣 글 커뮤니티 상단에 3일 고정
                        </li>
                        <li>
                            <img src="" alt="그래프 이미지" />
                            헬린이에 달성할 수 있는 기회!
                        </li>
                    </ul>
                </fieldset>
            </div>
        </div>
    )
}

export default ThisMonthBenefit;
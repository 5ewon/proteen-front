import './UserTierBenefit.scss';

function UserTierBenefit() {
    return (
        <div id="tier-information">
            <div id="show-benefit"><span></span> 등급 혜택 보기</div>
            <div id="options">
                <div id="about-information">
                    <div id="about-proteen">
                        <div>
                            <img src="" alt="하트이미지" />
                            <span className="user-name"></span>님이 받은 프로틴
                        </div>
                        <div id="proteen-count"><span>17902</span>g</div>
                    </div>
                    <div id="about-follower">
                        <div id="follower">
                            <div>팔로워</div>
                            <div id="follower-count"></div>
                        </div>
                        <div className='vertical-line'></div>
                        <div id="following">
                            <div>팔로잉</div>
                            <div id="following-count"></div>
                        </div>
                        <div className='vertical-line'></div>
                        <div id="study-methods">
                            <div>작성한 공부법</div>
                            <div id="study-methods-count"></div>
                        </div>
                    </div>
                </div>
                <div id="manage-information">
                    <div>
                        <img src="" alt="" />
                        공부법 관리
                        <img src="" alt=">" />
                    </div>
                    <div>
                        <img src="" alt="" />
                        댓글 관리
                        <img src="" alt=">" />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <span></span>님 지금 공부법 작성하고 최대 1000g 받으세요
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt=">" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTierBenefit;
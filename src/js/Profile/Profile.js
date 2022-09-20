import './Profile.scss';

function Profile() {
    return (
        <div id="profile-container">
            <div id="profile">
                <div id="user-information"></div>
                <div id="teer-information">
                    <div id="selection"><span></span> 등급 혜택 보기</div>
                    <div id="options">
                        <div id="about-information">
                            <div id="about-proteen">
                                <div>
                                    <img src="" alt="하트이미지" />
                                    <span id="profile-user-id"></span>님이 받은 프로틴
                                </div>
                                <div id="proteen-count"><span>17902</span>g</div>
                            </div>
                            <div id="about-follower">
                                <div id="follower">
                                    <div>팔로워</div>
                                    <div id="follower-count"></div>
                                </div>
                                <div id="following">
                                    <div>팔로잉</div>
                                    <div id="following-count"></div>
                                </div>
                                <div id="study-methods">
                                    <div>작성한 공부법</div>
                                    <div id="study-methods-count"></div>
                                </div>
                            </div>
                        </div>
                        <div id="manage-information">
                            <div>
                                <img src="" alt="공부법" />
                                공부법 관리
                                <img src="" alt="꺾쇠" />
                            </div>
                            <div>
                                <img src="" alt="댓글" />
                                댓글 관리
                                <img src="" alt="꺾쇠" />
                            </div>
                            <div>
                                <img src="" alt="공부법" />
                                <span></span>님 지금 공부법 작성하고 최대 1000g 받으세요
                                <img src="" alt="불" />
                                <img src="" alt="불" />
                                <img src="" alt="꺾쇠" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="teer-benefit">
                <div id="benefit-title">
                    <h1>티어별 혜택 안내</h1>
                    <div>각 등급을 눌러 등급별 상세 혜택을 확인하세요</div>
                </div>
                <div id="benefit-information">
                    <div id="teers">
                        <div>
                            <img src="" alt="등급1" />
                            <img src="" alt="등급2" />
                            <img src="" alt="등급3" />
                            <img src="" alt="등급4" />
                            <img src="" alt="등급5" />
                        </div>
                        <div>
                            <fieldset>
                                <legend>헬린이</legend>
                                <ul>
                                    <li>매달 15일 150g 추가 적립</li>
                                    <li>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                                    <li>다음 등급에 달성할 수 있는 기회!</li>
                                </ul>
                            </fieldset>
                        </div>
                    </div>
                    <div id="teer-benefits">
                        <h6><span id="benefit-user-id"></span>님의 이번 달 등급과 혜택</h6>
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
                    <div id="level">
                        <label for="file"><span></span>g 획득 시 다음 등급 달성!</label>
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
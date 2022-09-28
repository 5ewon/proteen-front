import './Profile.scss';
import profileImage from 'images/Profile/profile.svg';

function Profile() {
    return (
        <div id="profile-container">
            <div id="profile">
                <div id="user-information">
                    <div>
                        <img src={profileImage} alt="프로필사진" />
                        <span id="user-name"><span>아무개</span>님</span>
                        <span id="user-id">amugae1234</span>
                    </div>
                    <img id="setting" src="" alt="setting" />
                </div>
                <div id="teer-information">
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
            </div>
            <div id="teer-benefit">
                <div id="benefit-title">
                    <h5>티어별 혜택 안내</h5>
                    <div>각 등급을 눌러 등급별 상세 혜택을 확인하세요</div>
                </div>
                <div id="benefit-information">
                    <div id="teers-info">
                        <div id="teers">
                            <div>닭</div>
                            <div>단</div>
                            <div>헬</div>
                            <div>계</div>
                            <div>콩</div>
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
                    <div id="level">
                        <label htmlFor="file"><span id="next-proteen"></span>g 획득 시 다음 등급 달성!</label>
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
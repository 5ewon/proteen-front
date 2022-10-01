import './TiersInfo.scss';

function TiersInfo() {
    return (
        <div id="tiers-info">
            <div id="tiers">
                <input id="chicken-tier" type="radio" name="tier" />
                <label htmlFor='chicken-tier'>
                    닭
                </label>
                <input id="proteen-tier" type="radio" name="tier" />
                <label htmlFor='proteen-tier'>
                    단
                </label>
                <input id="health-tier" type="radio" name="tier" />
                <label htmlFor='health-tier'>
                    헬
                </label>
                <input id="egg-tier" type="radio" name="tier" />
                <label htmlFor='egg-tier'>
                    계
                </label>
                <input id="bean-tier" type="radio" name="tier" />
                <label htmlFor='bean-tier'>
                    콩
                </label>
            </div>
            <div id="tier-explanations">
                <fieldset>
                    <legend>닭</legend>
                    <ul>
                        <li>매달 15일 150g 추가 적립</li>
                        <li>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                        <li>다음 등급에 달성할 수 있는 기회!</li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>단</legend>
                    <ul>
                        <li>매달 15일 150g 추가 적립</li>
                        <li>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                        <li>다음 등급에 달성할 수 있는 기회!</li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>헬린이</legend>
                    <ul>
                        <li>매달 15일 150g 추가 적립</li>
                        <li>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                        <li>다음 등급에 달성할 수 있는 기회!</li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>계</legend>
                    <ul>
                        <li>매달 15일 150g 추가 적립</li>
                        <li>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                        <li>다음 등급에 달성할 수 있는 기회!</li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>콩</legend>
                    <ul>
                        <li>매달 15일 150g 추가 적립</li>
                        <li>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                        <li>다음 등급에 달성할 수 있는 기회!</li>
                    </ul>
                </fieldset>
            </div>
        </div>
    )
}

export default TiersInfo;
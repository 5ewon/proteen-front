import './TierBenefitGuide.scss';

function TierBenefitGuide({children}) {
    return (
        <div id="tier-guide">
            <div id="benefit-guide-title">
                <h5>티어별 혜택 안내</h5>
                <div>각 등급을 눌러 등급별 상세 혜택을 확인하세요</div>
            </div>
            <div id="benefit-information">
                {children}
            </div>
        </div>
    )
}

export default TierBenefitGuide;
import './Profile.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import UserState from './ProfileInfo/UserState/UserState';
import UserTierBenefit from './ProfileInfo/UserTierBenefit/UserTierBenefit';
import ProteenLevel from './TierBenefitGuide/ProteenLevel/ProteenLevel';
import ThisMonthBenefit from './TierBenefitGuide/ThisMonthBenefit/ThisMonthBenefit';
import TierBenefitGuide from './TierBenefitGuide/TierBenefitGuide';
import TiersInfo from './TierBenefitGuide/TierBenefitInfo/TiersInfo';

function Profile() {
    return (
        <div id="profile-container">
            <ProfileInfo>
                <UserState />
                <UserTierBenefit />
            </ProfileInfo>
            <TierBenefitGuide>
                <TiersInfo />
                <ThisMonthBenefit />
                <ProteenLevel />
            </TierBenefitGuide>
        </div>
    );
}

export default Profile;
import PropTypes from 'prop-types';
import { ProfileDiv, ProfileImg, ProfileLocation, ProfileName,ProfileTag,ProfileStatsUl,ProfileStatsItem,ProfileCount,ProfileDescription } from './Profise.styled';
export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => { 
    return (
        <ProfileDiv className="profile">
            <ProfileDescription>
                <ProfileImg
                src={ avatar}
                alt="User avatar"
                className="avatar"
                />
                <ProfileName>{ username}</ProfileName>
                <ProfileTag className="tag">@{tag }</ProfileTag>
                <ProfileLocation className="location">{location }</ProfileLocation>
            </ProfileDescription>

            <ProfileStatsUl>
                <ProfileStatsItem>
                    <span className="label">Followers</span><br/>
                    <ProfileCount className="quantity">{ followers}</ProfileCount>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <span className="label">Views</span><br/>
                    <ProfileCount className="quantity">{ views}</ProfileCount>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <span className="label">Likes</span><br/>
                    <ProfileCount className="quantity">{likes }</ProfileCount>
                </ProfileStatsItem>
            </ProfileStatsUl>
        </ProfileDiv>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
            followers: PropTypes.string.isRequired,
            views: PropTypes.string.isRequired,
            likes: PropTypes.string,
    })
}
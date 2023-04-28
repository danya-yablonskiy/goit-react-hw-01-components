import PropTypes from 'prop-types';
import { Friend } from './Friend'
import {FriendUl } from './FriendList.styled'

export function FriendList({ friends }) { 
    return (
        <FriendUl>
            {friends.map(friend => (
                <Friend key={friend.id} avatar={ friend.avatar} name={ friend.name } isOnline={friend.isOnline}/>
            ))}
        </FriendUl>)
}

// Friend.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         avatar: PropTypes.string.isRequired,
//         name: PropTypes.number.isRequired,
//         isOnline: PropTypes.string.isRequired
//     }))
// }
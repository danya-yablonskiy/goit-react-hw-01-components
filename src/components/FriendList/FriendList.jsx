
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

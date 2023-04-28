import { FriendItem, IsOnlineState,FriendText} from './FriendList.styled'

export const Friend = ({ avatar, name, isOnline}) => { 
    return (
        <FriendItem>
            <IsOnlineState isOnline={ isOnline }/>
            <img className="avatar" src={avatar } alt="User avatar" width="48" />
            <FriendText>{name }</FriendText>
        </FriendItem>)
}

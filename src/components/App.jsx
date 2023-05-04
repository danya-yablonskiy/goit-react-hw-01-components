import PropTypes from 'prop-types';
import user from './Profile/user.json';
import data from './Statistic/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}  
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={ transactions} />
    </>
  )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
}
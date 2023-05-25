
import user from './usercard/user.json';
import data from './data/data.json';
import friends from './userfriends/friends.json';
import items from './stats/transactions.json';
import { UserCard } from "./usercard/UserCard"
import { UserStats } from "./data/UserStats"
import { UserFriends } from "./userfriends/UserFriends"
import { UserTransactions } from "./stats/UserTransactions"

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <UserStats 
        title="Upload stats"
        data={data}
      />
      <UserFriends 
        friends={friends}
      />
      <UserTransactions
        items ={items }
       />
    </div>
  );
};
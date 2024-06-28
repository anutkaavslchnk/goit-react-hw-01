
import './App.css';
import Profile from './components/Profile/Profile';
import userData from "../src/userData.json";
import FriendList from './components/FriendList/FriendList';
import friends from "../src/friends.json"
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from "../src/transactions.json"
function App() {
 
  return (
    <>
     <Profile name={userData.username} tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        statsFol={userData.stats.followers}
        statsView={userData.stats.views} statsLikes={userData.stats.likes}>
          

        </Profile>

        <FriendList friends={friends}></FriendList>
        <TransactionHistory items={transactions} />
    </>
  )
}

export default App

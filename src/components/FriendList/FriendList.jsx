import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";


console.log(s);

const FriendList = ({friends}) => {
 
  return (
    <div>
       <ul className={s.friendList}>
{friends.map((friend)=>{
    return <li key={friend.id} className={s.friendItem}><FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/></li>
})}
</ul> 

    </div>

  );
};



export default FriendList;
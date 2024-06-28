import s from "./FriendList.module.css";
import clsx from "clsx";

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

const FriendListItem=({avatar,name,isOnline})=>{
    return(
        <div className={s.cardsCont}>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={clsx(isOnline ?  s.green : s.red)}>{clsx(isOnline ? "Online" : "Offline")}</p>
</div>
    )
}

export default FriendList;
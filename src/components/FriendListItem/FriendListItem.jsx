import s from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem=({avatar,name,isOnline})=>{
    return(
        <div className={s.cardsCont}>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={clsx(isOnline ?  s.green : s.red)}>{clsx(isOnline ? "Online" : "Offline")}</p>
</div>
    )
}
export default FriendListItem;
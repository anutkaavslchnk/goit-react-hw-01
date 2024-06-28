import s from "./Profile.module.css";
console.log(s);
const Profile = ({name,tag,location,image,statsFol,statsView,statsLikes}) => {
  return (
    <div className={s.container}>
    <div >
      <img className={s.img}
        src={image}
        alt="User avatar"
      />
      <p className={s.name}>{name}</p>
      <p className={s.tagAndLoc}>@{tag}</p>
      <p className={s.tagAndLoc}>{location}</p>
    </div>
  
    <ul className={s.listOfStats}>
      <li className={s.itemOfStats}>
        <span>Followers:</span>
        <span>{statsFol}</span>
      </li>
      <li  className={s.itemOfStats}>
        <span>Views:</span>
        <span>{statsView}</span>
      </li>
      <li  className={s.itemOfStats}>
        <span>Likes:</span>
        <span>{statsLikes}</span>
      </li>
    </ul>
  </div>
  )
}

export default Profile;
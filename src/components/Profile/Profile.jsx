import css from './Profile.module.css'

const Profile = ({ username, tag, location, image, stats }) => {
     
    return (
    <div className={css.container}>
  <div className={css["profile-container"]}>
    <img className={css.img}
      src={image}
      alt="User avatar"
    />
    <p className={css["user-name"]}>{username}</p>
    <p className={css["user-tag"]}>@{tag}</p>
    <p className={css["user-location"]}>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li className={css.item}>
      <span className={css["profile-description"]}>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css["profile-description"]}>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css["profile-description"]}>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
export default Profile
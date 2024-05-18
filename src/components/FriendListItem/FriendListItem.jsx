import css from '../FriendList/FriendList.module.css'

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusClass = isOnline ? css.online : css.offline;
return (
    <div className={css["friend-info"]}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css["friend-name"]}> {name}</p>
  <p className={`${css["friend-status"]} ${statusClass}`}> {statusText}</p>
</div>
)
}

export default FriendListItem
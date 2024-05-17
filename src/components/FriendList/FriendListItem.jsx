import css from './Friendlist.module.css'

const FriendListItem = ({ friend }) => {
const { id, avatar, name, isOnline } = friend;
return (
    <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css["friend-name"]}> {name}</p>
  <p className={css["friend-status"]}> {isOnline}</p>
</div>
)
}

export default FriendListItem
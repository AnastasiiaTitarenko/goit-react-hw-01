import css from './Friendlist.module.css'

const FriendListItem = ({ friend }) => {
const { id, avatar, name, isOnline } = friend;
  return (
    <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div>


  )
}

export default FriendListItem
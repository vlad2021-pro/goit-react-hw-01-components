import {FriendListItem} from './FriendListItem'

export const FriendList = ({friends}) => {
  return <div>
    {friends.map(({avatar,name,isOnline, id}) => (
        <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    )
    )}
  </div>
}
import PropTypes from 'prop-types'
import {FriendCase, FriendItem, FriendStatus, FriendAvatar, FriendName  } from './FriendListItem.styled'
export const FriendListItem = ({avatar,name,isOnline}) => {
  return <FriendCase>
  <FriendItem >
  <FriendStatus isOnline ={isOnline}></FriendStatus>
  <FriendAvatar src={avatar} alt="User avatar" width="48" /> 
  <FriendName>{name}</FriendName>
  </FriendItem>
  </FriendCase>
}


  FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
  PropTypes.shape({
  avatar: PropTypes.number,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  }).isRequired) 
}
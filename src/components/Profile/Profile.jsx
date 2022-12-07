import PropTypes from 'prop-types';
import { Container, Avatar , NameProfile, NameTag, Description, Stats, Info,  InfoList, InfoQuantity} from './Profile.styled';

export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
  return(
    <Container >
  <Description >
    <Avatar
      src= {avatar}
      alt="User avatar"
    />
    <NameProfile >{username}</NameProfile >
    <NameTag>@{tag}</NameTag>
    <NameTag>{location}</NameTag>
  </Description >
  <Stats >
    <InfoList>
      <Info>Followers</Info>
      <InfoQuantity>{followers}</InfoQuantity>
    </InfoList>
    <InfoList>
      <Info>Views</Info>
      <InfoQuantity>{views}</InfoQuantity>
    </InfoList>
    <InfoList>
      <Info>Likes</Info>
      <InfoQuantity>{likes}</InfoQuantity>
    </InfoList>
  </Stats >
</Container >
  )
};


Profile.propTypes = {
username : PropTypes.string,
 tag : PropTypes.string,
 location : PropTypes.string,
 avatar : PropTypes.string,
 followers : PropTypes.number,
 views : PropTypes.number,
 likes : PropTypes.number,
};




//{username, tag, location, avatar, followers, views, likes}
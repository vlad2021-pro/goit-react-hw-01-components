import PropTypes from 'prop-types';
import {
  Container,
  Avatar,
  NameProfile,
  NameTag,
  Description,
  Stats,
  Info,
  InfoList,
  InfoQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <NameProfile>{username}</NameProfile>
        <NameTag>@{tag}</NameTag>
        <NameTag>{location}</NameTag>
      </Description>
      <Stats>
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
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

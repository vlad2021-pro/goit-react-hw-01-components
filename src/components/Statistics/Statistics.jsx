import PropTypes from 'prop-types';
import {
  Container,
  StatTitle,
  StatList,
  StatItem,
  StatItemLabel,
  StatItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatItemLabel>{label}</StatItemLabel>
            <StatItemPercentage>{percentage}%</StatItemPercentage>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

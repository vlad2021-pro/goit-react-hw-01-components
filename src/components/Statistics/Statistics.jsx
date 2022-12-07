import PropTypes from 'prop-types';
import {Container, StatTitle, StatList, StatItem, StatItemLabel,StatItemPercentage} from './Statistics.styled'

export const Statistics = ({title, stats}) => {
  console.log(stats)
  return (
  <Container>
    {title && <StatTitle>{title}</StatTitle> }
    <StatList >
    {stats.map(({ id, label, percentage }) => (
      <StatItem  key={id}>
      <StatItemLabel>{label}</StatItemLabel>
      <StatItemPercentage>{percentage}%</StatItemPercentage>
      </StatItem>
    ))}
    </StatList>
  </Container>
    

  )
} 


Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number.isRequired
 
  };
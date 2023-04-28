import PropTypes from 'prop-types';
import { Section, SectionList, SectionItem, SectionTitle } from './Statistics.styled';

export const Statistics = ({title, stats }) => { 
  return (
    <Section>
      {title && <SectionTitle>{title }</SectionTitle>}

     <SectionList>
        {stats.map(stat => (
          <SectionItem key={stat.id}>
            <span className="label">{ stat.label}</span><br/>
            <span className="percentage">{stat.percentage }</span>
          </SectionItem>
        ))}
      </SectionList>
    </Section>)
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}
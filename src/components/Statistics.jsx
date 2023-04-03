import PropTypes from 'prop-types';
import s from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad, total, positivePercentag }) => (
  <div className={s.statsBox}>
    <span className={s.statsText}>Good: {good}</span>
    <span className={s.statsText}>Neutral: {neutral}</span>
    <span className={s.statsText}>Bad: {bad}</span>
    <span className={s.statsText}>Total: {total}</span>
    {total ? (
      <span className={s.statsText}>Positive feedback: {positivePercentag} %</span>
    ) : (
      <span className={s.statsText}>Positive feedback: 0 %</span>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentag: PropTypes.string.isRequired,
};

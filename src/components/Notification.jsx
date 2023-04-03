import PropTypes from 'prop-types';
import s from './Notification.module.css';
export const Notification = ({ message }) => (
  <>
    <p className={s.message}>{message} 🤷🏻‍♀️</p>
  </>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

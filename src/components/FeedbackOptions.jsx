import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ onHandleUpdate }) => (
  <>
    <h1 className={s.title}>Please leave feedback</h1>
    <div className={s.container}>
      <button
        className={s.btn}
        type="button"
        name="good"
        onClick={onHandleUpdate}
      >
        Good 😊
      </button>
      <button
        className={s.btn}
        type="button"
        name="neutral"
        onClick={onHandleUpdate}
      >
        Neutral 😳
      </button>
      <button
        className={s.btn}
        type="button"
        name="bad"
        onClick={onHandleUpdate}
      >
        Bad 🤮
      </button>
    </div>
  </>
);

FeedbackOptions.propTypes = {
  onHandleUpdate: PropTypes.func.isRequired,
};

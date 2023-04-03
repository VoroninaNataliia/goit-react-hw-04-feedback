import PropTypes from 'prop-types';
import s from './SectionTitle.module.css';

export const Section = ({ title, children }) => (
  <>
    <section className={s.stats}>
      <h2 className={s.statTitle}>{title}</h2>
      {children}
    </section>
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

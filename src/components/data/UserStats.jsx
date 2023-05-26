import PropTypes from 'prop-types';
import styles from './data.module.css';
export const UserStats = ({ data, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statlist}>
        {data.map(element => {
          return (
            <li
              key={element.id}
              className={styles.item}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={styles.label}>{element.label}</span>
              <span className={styles.percentage}>{element.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

UserStats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

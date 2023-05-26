import PropTypes from 'prop-types';
import styles from './userfriends.module.css';
export const UserFriends = ({ friends }) => {
  return friends.map(element => (
    <li key={element.id} className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: element.isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className={styles.avatar}
        src={element.avatar}
        alt="User avatar"
        width="80"
      />
      <p className={styles.name}>{element.name}</p>
    </li>
  ));
};

UserFriends.propTypes = {
  friends: PropTypes.array,
};

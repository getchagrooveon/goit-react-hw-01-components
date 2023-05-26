import PropTypes from 'prop-types';
import styles from './transactions.module.css';
export const UserTransactions = ({ items }) => {
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(element => (
            <tr key={element.id}>
              <td>{element.type}</td>
              <td>{element.amount}</td>
              <td>{element.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

UserTransactions.propTypes = {
  items: PropTypes.array,
};

import PropTypes from 'prop-types';
import {
  TransactionListHistory,
  TransactionHeader,
  TransactionHeaderCase,
  TransactionColumn,
  TransactionString,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <TransactionListHistory>
        <thead>
          <TransactionHeader>
            <TransactionHeaderCase>Type</TransactionHeaderCase>
            <TransactionHeaderCase>Amount</TransactionHeaderCase>
            <TransactionHeaderCase>Currency</TransactionHeaderCase>
          </TransactionHeader>
        </thead>
        <TransactionColumn>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <TransactionString>{type}</TransactionString>
              <TransactionString>{amount}</TransactionString>
              <TransactionString>{currency}</TransactionString>
            </tr>
          ))}
        </TransactionColumn>
      </TransactionListHistory>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

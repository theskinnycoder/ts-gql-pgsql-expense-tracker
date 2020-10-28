import React from 'react';

import { GlobalProps } from '../App';
import TransactionItem from './TransactionItem';

// The Base React Functional Component
const TransactionList: React.FC<GlobalProps> = ({ data }) => {
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {data?.allTransactions.map(transaction => (
          <TransactionItem key={transaction?.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

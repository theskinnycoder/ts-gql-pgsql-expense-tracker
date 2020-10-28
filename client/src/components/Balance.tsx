import React from 'react';

import { GlobalProps } from '../App';

// The Base React Functional Component
const Balance: React.FC<GlobalProps> = ({ data }) => {
  const amounts = data?.allTransactions.map(transaction => transaction.amount);

  const total = amounts?.reduce((acc, item) => (acc += item), 0)?.toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;

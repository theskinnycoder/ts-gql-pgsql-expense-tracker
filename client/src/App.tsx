import React from 'react';

import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

import {
  GetTransactionsQuery,
  useGetTransactionsQuery,
} from './generated/graphql';

// Global PropTypes for all children components
export interface GlobalProps {
  data: GetTransactionsQuery | undefined;
}

// The Base React Functional Component
const App: React.FC = () => {
  // Use the Generated useGetTransactionsQuery Hook
  const { data, loading, error } = useGetTransactionsQuery();

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance data={data} />
        <IncomeExpenses data={data} />
        <TransactionList data={data} />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;

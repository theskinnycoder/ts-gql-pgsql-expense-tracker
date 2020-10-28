import React, { FormEventHandler, useState } from 'react';

import {
  GetTransactionsDocument,
  GetTransactionsQuery,
  useCreateTransactionMutation,
} from '../generated/graphql';

// The Base React Functional Component
const AddTransaction = () => {
  // Local States for Form Values
  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  // Use the Generated useCreateTransactionMutation Hook
  const [
    CreateTransaction,
    { loading, error },
  ] = useCreateTransactionMutation();

  // Run the CreateTransaction Mutation and Update the Cache
  const submitHandler: FormEventHandler = e => {
    e.preventDefault();

    CreateTransaction({
      variables: { text, amount: +amount },

      // Updating the Cache
      update: (cache, { data: { newTransaction } }) => {
        // First read the initial cache
        const { allTransactions } = cache.readQuery<GetTransactionsQuery>({
          query: GetTransactionsDocument,
        });

        // Then add the created trasaction into the existing cache
        cache.writeQuery<GetTransactionsQuery>({
          query: GetTransactionsDocument,
          data: {
            allTransactions: [...allTransactions, newTransaction],
          },
        });
      },
    });
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            onChange={e => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            onChange={e => setAmount(+e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button type='submit' className='btn'>
          Add transaction
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}
      </form>
    </>
  );
};

export default AddTransaction;

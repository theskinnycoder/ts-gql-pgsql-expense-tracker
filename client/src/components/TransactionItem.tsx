import React, { FormEventHandler } from 'react';

import {
	GetTransactionsDocument,
	GetTransactionsQuery,
	Transaction,
	useDeleteTransactionMutation,
} from '../generated/graphql';

// PropTypes for the Transaction type
interface TransactionProps {
	transaction: {
		__typename?: 'Transaction';
	} & Pick<Transaction, 'id' | 'text' | 'amount'>;
}

// The Base React Functional Component
const TransactionItem: React.FC<TransactionProps> = ({ transaction }) => {
	// Use the Generated useDeleteTransactionMutation Hook
	const [
		DeleteTransaction,
		{ loading, error },
	] = useDeleteTransactionMutation();

	// Run the DeleteTransaction Mutation and Update the Cache
	const deleteHandler: FormEventHandler = () => {
		DeleteTransaction({
			variables: { id: transaction?.id },

			// Updating the Cache
			update: (cache, { data: { deletedTransaction } }) => {
				// First read the initial cache
				const { allTransactions } = cache.readQuery<GetTransactionsQuery>({
					query: GetTransactionsDocument,
				});

				// Then remove the deleted transaction from the existing cache
				cache.writeQuery<GetTransactionsQuery>({
					query: GetTransactionsDocument,
					data: {
						allTransactions: allTransactions.filter(
							txn => txn.id !== deletedTransaction
						),
					},
				});
			},
		});
	};

	const sign = transaction?.amount < 0 ? '-' : '+';

	return (
		<li className={transaction?.amount < 0 ? 'minus' : 'plus'}>
			{transaction.text}{' '}
			<span>
				{sign}${Math.abs(transaction?.amount)}
			</span>
			<button className='delete-btn' onClick={deleteHandler}>
				x
			</button>
			{loading && <p>Loading...</p>}
			{error && <p>Error...</p>}
		</li>
	);
};

export default TransactionItem;

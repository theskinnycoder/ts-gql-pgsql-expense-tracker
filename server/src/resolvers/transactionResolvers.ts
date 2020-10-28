import { Arg, ID, Int, Mutation, Query, Resolver } from 'type-graphql';
import Transaction from '../entities/Transaction';

@Resolver()
export class TransactionResolvers {
	@Query(() => [Transaction!]!)
	async allTransactions() {
		const transactions = await Transaction.find();
		return transactions;
	}

	@Mutation(() => Transaction!)
	async newTransaction(
		@Arg('text', { nullable: false }) text: string,
		@Arg('amount', () => Int!) amount: number
	) {
		const transaction = await Transaction.create({ text, amount }).save();
		return transaction;
	}

	@Mutation(() => ID!)
	async deletedTransaction(@Arg('id', () => ID!) id: number) {
		await Transaction.delete({ id });
		return id;
	}
}

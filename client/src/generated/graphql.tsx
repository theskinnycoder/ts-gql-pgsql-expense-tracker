import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  allTransactions: Array<Transaction>;
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  text: Scalars['String'];
  amount?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  newTransaction: Transaction;
  deletedTransaction: Scalars['ID'];
};

export type MutationNewTransactionArgs = {
  amount: Scalars['Int'];
  text: Scalars['String'];
};

export type MutationDeletedTransactionArgs = {
  id: Scalars['ID'];
};

export type CreateTransactionMutationVariables = Exact<{
  text: Scalars['String'];
  amount: Scalars['Int'];
}>;

export type CreateTransactionMutation = { __typename?: 'Mutation' } & {
  newTransaction: { __typename?: 'Transaction' } & Pick<
    Transaction,
    'id' | 'text' | 'amount'
  >;
};

export type DeleteTransactionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteTransactionMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'deletedTransaction'
>;

export type GetTransactionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTransactionsQuery = { __typename?: 'Query' } & {
  allTransactions: Array<
    { __typename?: 'Transaction' } & Pick<Transaction, 'id' | 'text' | 'amount'>
  >;
};

export const CreateTransactionDocument = gql`
  mutation CreateTransaction($text: String!, $amount: Int!) {
    newTransaction(text: $text, amount: $amount) {
      id
      text
      amount
    }
  }
`;
export type CreateTransactionMutationFn = Apollo.MutationFunction<
  CreateTransactionMutation,
  CreateTransactionMutationVariables
>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      text: // value for 'text'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useCreateTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTransactionMutation,
    CreateTransactionMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateTransactionMutation,
    CreateTransactionMutationVariables
  >(CreateTransactionDocument, baseOptions);
}
export type CreateTransactionMutationHookResult = ReturnType<
  typeof useCreateTransactionMutation
>;
export type CreateTransactionMutationResult = Apollo.MutationResult<
  CreateTransactionMutation
>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<
  CreateTransactionMutation,
  CreateTransactionMutationVariables
>;
export const DeleteTransactionDocument = gql`
  mutation DeleteTransaction($id: ID!) {
    deletedTransaction(id: $id)
  }
`;
export type DeleteTransactionMutationFn = Apollo.MutationFunction<
  DeleteTransactionMutation,
  DeleteTransactionMutationVariables
>;

/**
 * __useDeleteTransactionMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionMutation, { data, loading, error }] = useDeleteTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTransactionMutation,
    DeleteTransactionMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteTransactionMutation,
    DeleteTransactionMutationVariables
  >(DeleteTransactionDocument, baseOptions);
}
export type DeleteTransactionMutationHookResult = ReturnType<
  typeof useDeleteTransactionMutation
>;
export type DeleteTransactionMutationResult = Apollo.MutationResult<
  DeleteTransactionMutation
>;
export type DeleteTransactionMutationOptions = Apollo.BaseMutationOptions<
  DeleteTransactionMutation,
  DeleteTransactionMutationVariables
>;
export const GetTransactionsDocument = gql`
  query GetTransactions {
    allTransactions {
      id
      text
      amount
    }
  }
`;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >
) {
  return Apollo.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(
    GetTransactionsDocument,
    baseOptions
  );
}
export function useGetTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >(GetTransactionsDocument, baseOptions);
}
export type GetTransactionsQueryHookResult = ReturnType<
  typeof useGetTransactionsQuery
>;
export type GetTransactionsLazyQueryHookResult = ReturnType<
  typeof useGetTransactionsLazyQuery
>;
export type GetTransactionsQueryResult = Apollo.QueryResult<
  GetTransactionsQuery,
  GetTransactionsQueryVariables
>;

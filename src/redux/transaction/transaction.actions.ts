import { TransactionT } from '../../types';

export const ADD_TRANSACTION = 'transaction/add';
export const ADD_MANY_TRANSACTION = 'transaction/addMany';

export const addTransaction = (transaction: TransactionT) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const addManyTransactions = (transactions: TransactionT[]) => ({
    type: ADD_MANY_TRANSACTION,
    payload: transactions,
  });
  
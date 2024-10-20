import { TransactionT } from '../../types';

export const ADD_TRANSACTION = 'transaction/add';

export const addTransaction = (transaction: TransactionT) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

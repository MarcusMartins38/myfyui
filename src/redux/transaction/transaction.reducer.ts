import { TransactionT } from '../../types';
import { ADD_MANY_TRANSACTION, ADD_TRANSACTION } from './transaction.actions';

type InitialStateProps = {
  transactions: TransactionT[];
};

type ActionProps = {
  type: string;
  payload?: object;
};

const initialState: InitialStateProps = {
  transactions: [],
};

export const transactionReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case ADD_MANY_TRANSACTION:
      return { ...state, transactions: [...action.payload, ...state.transactions] };
    default:
      return state;
  }
};

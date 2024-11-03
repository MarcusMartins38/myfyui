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
  transactions: [
    {
      id: 0,
      name: 'Market',
      date: new Date(),
      amount: 80.5,
      status: 'outcome',
      userId: 1,
    },
  ],
};

export const transactionReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case ADD_MANY_TRANSACTION:
      return { ...state, transactions: [...state.transactions, ...action.payload] };
    default:
      return state;
  }
};

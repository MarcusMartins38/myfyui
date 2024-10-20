import { TransactionT } from '../../types';
import { ADD_TRANSACTION } from './transactionActions';

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
      name: 'Market',
      date: new Date(),
      amount: 80.5,
      status: 'outcome',
    },
  ],
};

export const transactionReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, transactions: [...state.transactions, action.payload] };
    default:
      return state;
  }
};

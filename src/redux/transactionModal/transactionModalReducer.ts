import { TRANSACTION_MODAL_SET_IS_OPEN } from './transactionModalActions';

const initialState = {
  isOpen: false,
};

export const transactionModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_MODAL_SET_IS_OPEN:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};

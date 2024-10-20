import { createStore, combineReducers } from 'redux';
import { transactionReducer } from './transaction/transactionReducer';
import { transactionModalReducer } from './transactionModal/transactionModalReducer';

const combinedReducers = combineReducers({
  transactionReducer,
  transactionModalReducer,
});

const store = createStore(combinedReducers);
export default store;

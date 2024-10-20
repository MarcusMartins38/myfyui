import { createStore, combineReducers } from 'redux';
import { transactionReducer } from './transaction/transactionReducer';

const combinedReducers = combineReducers({
  transactionReducer,
});

const store = createStore(combinedReducers);
export default store;

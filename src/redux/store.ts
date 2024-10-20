import { combineReducers, createStore } from 'redux';
import { transactionReducer } from './transaction/transactionReducer';
import { transactionModalReducer } from './transactionModal/transactionModalReducer';

const combinedReducers = combineReducers({
  transactionReducer,
  transactionModalReducer,
});

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;

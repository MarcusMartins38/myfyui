export const selectTotalIncome = (store) => {
  const transactions = store.transactionReducer.transactions;
  const incomesTransactions = transactions.filter((transaction) => transaction.status === 'income');
  return incomesTransactions.reduce((acc, curr) => acc + curr.amount, 0);
};

export const selectTotalOutcome = (store) => {
  const transactions = store.transactionReducer.transactions;
  const incomesTransactions = transactions.filter(
    (transaction) => transaction.status === 'outcome',
  );
  return incomesTransactions.reduce((acc, curr) => acc + curr.amount, 0);
};

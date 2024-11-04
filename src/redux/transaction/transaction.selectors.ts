import { TransactionT, TrasactionStatusT } from '../../types';

type FilterByTypeAndDate = {
  transaction: TransactionT;
  type: TrasactionStatusT;
  startDate?: Date;
  endDate?: Date;
};

const filterByTypeAndDate = ({
  transaction,
  type,
  startDate,
  endDate,
}: FilterByTypeAndDate): boolean => {
  const transactionDate = new Date(transaction.date);
  const isIncome = transaction.status === type;

  const isWithinDateRange =
    (startDate === null && endDate === null) ||
    (startDate === null && transactionDate <= (endDate as Date)) ||
    (endDate === null && transactionDate >= (startDate as Date)) ||
    (transactionDate >= (startDate as Date) && transactionDate <= (endDate as Date));

  return isIncome && isWithinDateRange;
};

export const selectTotalIncome = (store: any): number => {
  const transactions = store.transactionReducer.transactions;
  const dateFilter = store.dateFilterReducer;

  const incomesTransactions = transactions.filter((transaction) =>
    filterByTypeAndDate({
      transaction,
      type: 'income',
      startDate: dateFilter.startDate,
      endDate: dateFilter.endDate,
    }),
  );

  return incomesTransactions.reduce((acc, curr) => acc + curr.amount, 0);
};

export const selectTotalOutcome = (store: any): number => {
  const transactions = store.transactionReducer.transactions;
  const dateFilter = store.dateFilterReducer;

  const incomesTransactions = transactions.filter((transaction) =>
    filterByTypeAndDate({
      transaction,
      type: 'outcome',
      startDate: dateFilter.startDate,
      endDate: dateFilter.endDate,
    }),
  );

  return incomesTransactions.reduce((acc, curr) => acc + curr.amount, 0);
};

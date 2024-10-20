export type TransactionT = {
  name: string;
  date: Date;
  amount: number;
  status: 'income' | 'outcome';
};

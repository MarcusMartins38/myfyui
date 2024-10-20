export type TrasactionStatusT = 'income' | 'outcome';
export type TransactionT = {
  name: string;
  date: Date;
  amount: number;
  status: TrasactionStatusT;
};

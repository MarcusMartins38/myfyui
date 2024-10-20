export type TrasactionStatusT = 'income' | 'outcome';
export type TransactionT = {
  id: number;
  name: string;
  date: Date;
  amount: number;
  status: TrasactionStatusT;
  userId: number;
};

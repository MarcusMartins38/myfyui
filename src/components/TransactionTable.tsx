import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatAmount, formatDate } from '../lib/utils';
import { addManyTransactions } from '../redux/transaction/transactionActions';
import { setTransactionModalOpen } from '../redux/transactionModal/transactionModalActions';
import { TransactionT } from '../types';
import Tag from './Tag';
import TransactionModal from './TransactionModal';

const colorTailwindMap = {
  income: 'green',
  outcome: 'red',
};

const fetchTransactions = async () => {
  const response = await fetch('http://localhost:5000/transactions');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export default function TransactionTable() {
  const transactions: TransactionT[] = useSelector(
    (store) => store.transactionReducer.transactions,
  );
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
  });

  useEffect(() => {
    console.log({ data, isLoading });
    if (!isLoading) {
      dispatch(addManyTransactions(data));
    }
  }, [isLoading, dispatch]);

  const handleOpen = () => dispatch(setTransactionModalOpen(true));

  return (
    <>
      <TransactionModal />

      <div className="bg-base-200 rounded-2xl max-w-3xl">
        <header className="flex flex-row w-[calc(100%-8px)] m-1">
          <button className="btn hover:bg-success/50" onClick={handleOpen}>
            Add Transaction
          </button>
        </header>

        <div className="overflow-y-auto max-h-80">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.name}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-10 w-10">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{transaction.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{String(formatDate(new Date(transaction.date)))}</td>
                  <td>{formatAmount(transaction.amount)}</td>
                  <td>
                    <Tag text={transaction.status} color={colorTailwindMap[transaction.status]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

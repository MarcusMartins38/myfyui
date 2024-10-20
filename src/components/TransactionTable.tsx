import { useState } from 'react';
import { formatAmount, formatDate } from '../lib/utils';
import { useSelector } from 'react-redux';
import Tag from './Tag';
import TransactionModal from './TransactionModal';

const colorTailwindMap = {
  income: 'green',
  outcome: 'red',
};

export default function TransactionTable() {
  const { transactions } = useSelector((store) => store.transactionReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);

  return (
    <>
      <TransactionModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="overflow-x-auto bg-base-200 rounded-2xl">
        <header className="flex flex-row w-[calc(100%-8px)] m-1">
          <button className="btn hover:bg-success/50" onClick={handleOpen}>
            Add Transaction
          </button>
        </header>

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
                <td>{formatDate(transaction.date)}</td>
                <td>{formatAmount(transaction.amount)}</td>
                <td>
                  <Tag text={transaction.status} color={colorTailwindMap[transaction.status]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

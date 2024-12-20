import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTransactions } from '../hooks/useTransactions';
import { formatAmount, formatDate, generateAvatarByText } from '../lib/utils';
import { setTransactionModalOpen } from '../redux/transactionModal/transactionModal.actions';
import { TransactionT } from '../types';
import Calendar from './Calendar';
import Tag from './Tag';
import TransactionModal from './TransactionModal';
import { setFilterDate } from '../redux/dateFilter/dateFilter.actions';

const colorTailwindMap = {
  income: 'green',
  outcome: 'red',
};

export default function TransactionTable() {
  const [showCalendar, setShowCalendar] = useState(false);
  const transactions: TransactionT[] = useSelector(
    (store) => store.transactionReducer.transactions,
  );
  const { isLoading } = useTransactions();
  const calendarSettings = useSelector((store) => store.dateFilterReducer);
  const filteredTransactions = transactions.filter((transaction) => {
    const { startDate, endDate } = calendarSettings;

    if (!startDate) return true;

    const transactionDate = new Date(transaction.date);

    const isAfterStartDate = transactionDate >= new Date(startDate);
    const isBeforeEndDate = endDate ? transactionDate <= new Date(endDate) : true;

    return isAfterStartDate && isBeforeEndDate;
  });

  const dispatch = useDispatch();

  const handleClearDateFilter = (item) =>
    dispatch(setFilterDate({ startDate: null, endDate: null }));
  const handleOpen = () => dispatch(setTransactionModalOpen(true));

  return (
    <>
      <TransactionModal />

      <div className="bg-base-200 w-full rounded-2xl max-w-3xl">
        <header className="flex flex-row justify-between w-[calc(100%-8px)] m-1 p-2">
          <button className="btn bg-success" onClick={handleOpen}>
            Add Transaction
          </button>

          <div className="flex flex-row items-center relative">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <button
              className="btn bg-error/40 ml-2 hover:bg-error/40"
              onClick={handleClearDateFilter}
            >
              Clear Date
            </button>
            <button
              className="btn bg-primary ml-2 hover:bg-primary/20"
              onClick={() => setShowCalendar((prev) => !prev)}
            >
              Filter By Date
            </button>
            <Calendar isOpen={showCalendar} setIsOpen={setShowCalendar} />
          </div>
        </header>

        <div className="overflow-y-auto max-h-80">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
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
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.name}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          {/* <div className="mask mask-squircle h-10 w-10">
                            <img
                              src={
                                transaction?.img ??
                                'https://img.daisyui.com/images/profile/demo/2@94.webp'
                              }
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div> */}
                          <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-12 rounded-full">
                              <span>{generateAvatarByText(transaction.name)}</span>
                            </div>
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
          )}
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';
import { formatAmount, formatDate } from '../lib/utils';
import { TransactionT } from '../types';

type TransactionModalProps = {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  setTransactionState: (transaction: TransactionT[]) => void;
};

const TransactionModal = ({
  isOpen,
  setIsModalOpen,
  setTransactionState,
}: TransactionModalProps) => {
  const [transactionType, setTransactionType] = useState('income');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleClose = () => setIsModalOpen(false);
  const handleSave = () => {
    const currentDate = new Date();

    const newTransaction = {
      name,
      date: currentDate,
      amount: formatAmount(Number(amount)),
      status: transactionType,
    };

    console.log({ newTransaction });
    setTransactionState((prev) => [...prev, newTransaction]);
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Add Transaction</h2>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-start mb-4">
              <span className="label-text mb-1">Transaction Type</span>
              <div className="flex items-center mt-2">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="transactionType"
                    value="income"
                    checked={transactionType === 'income'}
                    onChange={() => setTransactionType('income')}
                    className="radio"
                  />
                  <span className="ml-2">Income</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="transactionType"
                    value="outcome"
                    checked={transactionType === 'outcome'}
                    onChange={() => setTransactionType('outcome')}
                    className="radio"
                  />
                  <span className="ml-2">Outcome</span>
                </label>
              </div>
            </div>

            <div className="modal-action">
              <button className="btn" onClick={handleClose}>
                Close
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionModal;

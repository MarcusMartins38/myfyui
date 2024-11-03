import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { addTransaction } from '../redux/transaction/transaction.actions';
import { setTransactionModalOpen } from '../redux/transactionModal/transactionModal.actions';
import { TransactionT, TrasactionStatusT } from '../types';

const TransactionModal = () => {
  const [transactionType, setTransactionType] = useState('income');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState(null);

  const { isOpen } = useSelector((store) => store.transactionModalReducer);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setTransactionModalOpen(false));

  const handleSave = () => {
    const currentDate = new Date();

    const newTransaction = {
      name,
      date: currentDate,
      amount: Number(amount),
      status: transactionType,
      image,
    };

    dispatch(addTransaction(newTransaction));
    handleClose();
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result); // Converte para base64
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

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
                type="number"
                className="input input-bordered"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
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

            {/* Dropzone */}
            {/* <div
              {...getRootProps()}
              className="border-2 border-dashed rounded p-4 mb-4 text-center cursor-pointer"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the image here...</p>
              ) : (
                <p>Drag & drop an image here, or click to select one</p>
              )}
            </div> */}

            {/* Preview da Imagem */}
            {/* {image && (
              <div className="mb-4">
                <img src={image} alt="Preview" className="max-w-full h-auto" />
              </div>
            )} */}

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

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addManyTransactions } from '../redux/transaction/transactionActions';

export const useTransactions = () => {
  const dispatch = useDispatch();
  const fetchTransactions = async () => {
    const response = await fetch('http://localhost:5000/transactions');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

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

  return { isLoading };
};

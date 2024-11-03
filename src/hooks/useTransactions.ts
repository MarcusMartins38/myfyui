import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addManyTransactions } from '../redux/transaction/transaction.actions';

export const useTransactions = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const fetchTransactions = async () => {
    const response = await fetch('http://localhost:5000/transactions');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
  });

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(addManyTransactions(data));
    }
  }, [isLoading, data, dispatch]);

  const updateTransactionImage = async ({ id, imageFile }) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`http://localhost:5000/transactions/${id}/image`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer upload da imagem');
    }

    const updatedTransaction = await response.json();
    dispatch(updateTransaction(updatedTransaction)); // Atualiza no Redux
    queryClient.invalidateQueries('transactions'); // Atualiza o cache do React Query
  };

  return { data, isLoading, error, updateTransactionImage };
};

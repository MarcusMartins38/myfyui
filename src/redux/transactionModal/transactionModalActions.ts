export const TRANSACTION_MODAL_SET_IS_OPEN = 'transactionModal/setIsOpen';

export const setTransactionModalOpen = (isOpen: boolean) => ({
  type: TRANSACTION_MODAL_SET_IS_OPEN,
  payload: isOpen,
});

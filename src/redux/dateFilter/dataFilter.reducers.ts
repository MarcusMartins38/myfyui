import { DATE_FILTER_SETTINGS } from './dateFilter.actions';

const initialState = {
  startDate: (() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date;
  })(),
  endDate: new Date(),
  key: 'selection',
};

export const dateFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE_FILTER_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

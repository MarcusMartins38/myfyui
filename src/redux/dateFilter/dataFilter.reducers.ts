import { DATE_FILTER_SETTINGS } from './dateFilter.actions';

const initialState = {
  startDate: new Date(),
  endDate: null,
  key: 'selection',
};

export const dateFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE_FILTER_SETTINGS:
      console.log({ action });
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

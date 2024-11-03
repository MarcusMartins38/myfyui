export const DATE_FILTER_SETTINGS = 'dateFilter/settings';

export const setFilterDate = (dateFilterSettings) => ({
  type: DATE_FILTER_SETTINGS,
  payload: dateFilterSettings,
});

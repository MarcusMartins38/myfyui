import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterDate } from '../redux/dateFilter/dateFilter.actions';

type CalendarProps = {
  className?: string;
};

export default function Calendar({ className }: CalendarProps) {
  const calendarSettings = useSelector((store) => store.dateFilterReducer);
  const dispatch = useDispatch();
  const changeCalendarSettings = (item) => dispatch(setFilterDate(item));
  console.log(calendarSettings);

  return (
    <DateRange
      className={`h-auto absolute z-10 ${className}`}
      editableDateInputs={true}
      onChange={(item) => ''}
      moveRangeOnFirstSelection={false}
      ranges={{
        startDate: new Date(),
        endDate: null,
        key: 'selection',
      }}
    />
  );
}

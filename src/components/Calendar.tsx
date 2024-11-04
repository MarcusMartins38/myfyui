import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterDate } from '../redux/dateFilter/dateFilter.actions';

type CalendarProps = {
  className?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function Calendar({ className, isOpen, setIsOpen }: CalendarProps) {
  const calendarSettings = useSelector((store) => store.dateFilterReducer);
  const dispatch = useDispatch();
  const handleChangeCalendarSettings = (item) => {
    dispatch(setFilterDate(item));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <DateRange
      className={`h-auto absolute z-10 ${className}`}
      editableDateInputs={true}
      onChange={(item) => handleChangeCalendarSettings(item.selection)}
      moveRangeOnFirstSelection={false}
      ranges={[calendarSettings]}
    />
  );
}

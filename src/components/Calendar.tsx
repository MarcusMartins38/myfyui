import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type CalendarProps = {
  className?: string;
};

export default function Calendar({ className }: CalendarProps) {
  const [calendarSettings, setCalendarSettings] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <DateRange
      className={`h-auto absolute z-10 ${className}`}
      editableDateInputs={true}
      onChange={(item) => setCalendarSettings([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={calendarSettings}
    />
  );
}

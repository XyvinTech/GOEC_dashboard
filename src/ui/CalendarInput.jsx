import React, { useState } from 'react'
import StyledInput from './styledInput'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar_month.svg'

const CalendarInput = ({inputid}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  const handleCalendarClick = () => {
    setSelectedDate(new Date()); 
    setDatePickerOpen(!isDatePickerOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.toLocaleDateString() : '';
    const expid = inputid;
    document.getElementById(expid).value = formattedDate;
    setDatePickerOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <CalendarIcon onClick={handleCalendarClick}  style={{ cursor: 'pointer', zIndex: 1 }}  />
      {isDatePickerOpen && (
        <div style={{ position: 'absolute', zIndex: 2 }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            popperPlacement="bottom-start"
            open
          />
        </div>
      )}
    </div>
  )
}

export default CalendarInput

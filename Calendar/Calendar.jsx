import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './calendar.css';
export default function Calendar() {
  const [value, setValue] = useState(dayjs('2022-04-17'));

  const handleDateChange = (newValue) => {
    setValue(newValue);
    console.log('Year:', newValue.format('YYYY'));
    console.log('Month:', newValue.format('MM'));
    console.log('Date:', newValue.format('DD'));
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className='calendar-container'>
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker
              label="Select Date"
              value={value}
              onChange={handleDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
    </ThemeProvider>

      {/* to access each value in a date separately */}
      <h1> {value.format('YYYY')} </h1>
    </div>
  );
}

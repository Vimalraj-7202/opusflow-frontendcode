'use client'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, Paper } from '@mui/material';
import dayjs from 'dayjs';

export default function CustomMonthLayout() {
  const [value, setValue] = React.useState<any>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        elevation={1}
        sx={{
          p: '12px',
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '348px'
        }}
      >
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          slotProps={{
            day: (ownerState) => ({
              sx: {
                width: 37,
                height: 36,
                fontSize: '0.8rem',
                lineHeight: '36px',
                borderRadius: '50%',
                ...(ownerState.day.isSame(dayjs(), 'day') && {
                  backgroundColor: 'lightgreen',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'lightgreen',
                    opacity: 0.9
                  }
                }),
              },
            }),
          }}
          sx={{
            '& .MuiPickersCalendarHeader-root': { mb: 0.5 },
            '& .MuiDayCalendar-weekContainer': { mb: 0.4 },
            '& .MuiDayCalendar-header': { mb: 0.4 },
            // 🔥 force selected day to green
            '& .MuiPickersDay-root.Mui-selected': {
              backgroundColor: 'lightgreen',
              color: 'black',
              '&:hover': {
                backgroundColor: 'lightgreen',
                opacity: 0.9,
              },
            },
            '& .MuiPickersDay-dayWithMargin': {
              borderRadius: '50%',
            }
          }}
        />

        <Button
          sx={{
            color: 'white',
            textTransform: 'none',
            height: '40px',
            width: '100%',
            mt: '10px',
            borderRadius: '10px',
            backgroundColor: '#ad46ff',
            fontSize: '16px'
          }}
          onClick={() => setValue(dayjs())}
        >
          Today
        </Button>
      </Paper>
    </LocalizationProvider>
  );
}

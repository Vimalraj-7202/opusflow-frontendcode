import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useTheme as useCustomTheme } from '@/app/theme/ThemeContext';

const taskDetails = [
  { task: 10, completed: 4, overdue: 2, thisWeek: 5 }
];

const My_Task = () => {
  const { fontSize, colors } = useCustomTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        px: 2,
        py: 1
      }}
    >
      {taskDetails.map((details, index) => (
        <React.Fragment key={index}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: 'gray', fontSize: fontSize.standard }}>
              Tasks: <span style={{ color: 'orange', fontWeight: 'bold', fontSize: fontSize.base }}>{details.task}</span>
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2,borderColor:'gray' }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: 'gray', fontSize: fontSize.standard }}>
              Completed: <span style={{ color: 'green', fontWeight: 'bold', fontSize: fontSize.base }}>{details.completed}</span>
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2,borderColor:'gray' }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: 'gray', fontSize: fontSize.standard }}>
              Overdue: <span style={{ color: 'red', fontWeight: 'bold', fontSize: fontSize.base }}>{details.overdue}</span>
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2,borderColor:'gray'}} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: 'gray', fontSize: fontSize.standard }}>
              This Week: <span style={{ color: colors.primary, fontWeight: 'bold', fontSize: fontSize.base }}>{details.thisWeek}</span>
            </Typography>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default My_Task;

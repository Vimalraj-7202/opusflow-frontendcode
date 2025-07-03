'use client'
import React, { useState } from 'react';
import { Box, Typography, Paper, Stack, IconButton, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme as useCustomTheme } from '@/app/theme/ThemeContext';
import {format} from 'date-fns/format';

const timelineData = [
  {
    dateLabel: "Today",
    tasks: [
      { title: 'UI Development', status: 'In Progress', priority: 'High' },
      { title: 'Dashboard UI', status: 'Not Started', priority: 'Medium' }
    ]
  },
  {
    dateLabel: "Yesterday",
    tasks: [
      { title: 'Code Review', status: 'Completed', priority: 'Low' }
    ]
  },
  {
    dateLabel: "2 July",
    tasks: [
      { title: 'Integration Testing', status: 'Completed', priority: 'Medium' }
    ]
  },
  {
    dateLabel: "4 June",
    tasks: [
      { title: 'Client Demo Prep', status: 'Not Started', priority: 'High' }
    ]
  }
];

const TimelineTracker = () => {
  const { fontSize, colors } = useCustomTheme();
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterLabel, setFilterLabel] = useState("All");

  const priority = (priority:any) => {
    if (priority === 'High') return 'red';
    if (priority === 'Medium') return 'orange';
    if (priority === 'Low') return 'green';
    return 'gray';
  };

  // Handle date picker
  const handleDateChange = (date:any) => {
    if (!date) {
      setFilterLabel("All");
      setSelectedDate(null);
      return;
    }
    const formatted = format(date, 'd MMMM');
    setFilterLabel(formatted);
    setSelectedDate(date);
  };

  const filteredTimeline = timelineData.filter(item => {
    if (filterLabel === "All") return true;
    return item.dateLabel === filterLabel;
  });

  return (
    <Box sx={{ mt: 4 }}>
      {/* Modern filter header */}
      <Paper sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py: 1,
        mb: 3,
        borderRadius: 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: fontSize.base }}>
          {filterLabel === "All" ? "Showing all tasks" : `Showing tasks on ${filterLabel}`}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              slotProps={{
                textField: {
                  size: 'small',
                  variant: 'outlined',
                  sx: {
                    borderRadius: '8px',
                    minWidth: '160px',
                    '& input': { fontSize: fontSize.standard }
                  }
                }
              }}
            />
          </LocalizationProvider>
          {filterLabel !== "All" && (
            <IconButton
              onClick={() => {
                setFilterLabel("All");
                setSelectedDate(null);
              }}
              sx={{
                bgcolor: 'transparent',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </Paper>

      {/* Timeline */}
      {filteredTimeline.length === 0 ? (
        <Typography sx={{ color: 'gray', textAlign: 'center', mt: 4 }}>
          No tasks found for {filterLabel}.
        </Typography>
      ) : (
        filteredTimeline.map((day, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{
                width: '12px',
                height: '12px',
                bgcolor: colors.primary,
                borderRadius: '50%',
                mr: 1
              }} />
              <Typography sx={{ fontSize: fontSize.base, fontWeight: 'bold' }}>
                {day.dateLabel}
              </Typography>
            </Box>
            <Stack spacing={1} sx={{ pl: 3 }}>
              {day.tasks.map((task, idx) => (
                <Paper
                  key={idx}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    backgroundColor: task.status === 'Completed' ? '#e8f5e9' : '#fff'
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold', fontSize: fontSize.standard }}>
                    {task.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    Status: {task.status}
                  </Typography>
                  <Typography variant="body2" sx={{ color: priority(task.priority) }}>
                    Priority: {task.priority}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Box>
        ))
      )}
    </Box>
  );
};

export default TimelineTracker;

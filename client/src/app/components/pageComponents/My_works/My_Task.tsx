'use client'
import React, { useState } from 'react';
import { Box, Typography, Divider, Paper, Radio, Stack, TextField } from '@mui/material';
import { useTheme as useCustomTheme } from '@/app/theme/ThemeContext';


const taskDetails = [
  { task: 10, completed: 4, overdue: 2, thisWeek: 5 }
];

const initialTasks = [
  { title: 'UI Development', due: '2025-07-08', status: 'In Progress', priority: 'High', completed: false },
  { title: 'Dashboard & Notifications UI', due: '2025-07-10', status: 'Not Started', priority: 'Medium', completed: false },
  { title: 'Code Review', due: '2025-07-12', status: 'Not Started', priority: 'Low', completed: false },
  { title: 'Integration Testing', due: '2025-07-15', status: 'Completed', priority: 'Medium', completed: true },
  { title: 'Client Demo Prep', due: '2025-07-20', status: 'Not Started', priority: 'High', completed: false },
];

const My_Task = () => {
  const { fontSize, colors } = useCustomTheme();
  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCompleted = (index: any) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    updated[index].status = updated[index].completed ? 'Completed' : 'Not Started';
    setTasks(updated);
  };

  const priority = (priority: any) => {
    if (priority === 'High') {
      return 'red'
    } else if (priority === 'Medium') {
      return 'orange'
    } else if (priority === 'Low') {
      return 'green'
    } else {
      return 'gray'
    }
  }


  const filteredTasks = tasks.filter(task => {
    const cleanTitle = task.title.toLowerCase().replace(/\s+/g, '');
    const cleanQuery = searchQuery.toLowerCase().replace(/\s+/g, '');
    return cleanTitle.includes(cleanQuery);
  });


  return (
    <>
      {/* Top summary */}
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

            <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'gray' }} />

            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: 'gray', fontSize: fontSize.standard }}>
                Completed: <span style={{ color: 'green', fontWeight: 'bold', fontSize: fontSize.base }}>{details.completed}</span>
              </Typography>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'gray' }} />

            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: 'gray', fontSize: fontSize.standard }}>
                Overdue: <span style={{ color: 'red', fontWeight: 'bold', fontSize: fontSize.base }}>{details.overdue}</span>
              </Typography>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'gray' }} />

            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: 'gray', fontSize: fontSize.standard }}>
                This Week: <span style={{ color: colors.primary, fontWeight: 'bold', fontSize: fontSize.base }}>{details.thisWeek}</span>
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>

      {/* Header with search and Filter */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Typography sx={{ fontSize: fontSize.base, fontWeight: 500 }}>My Tasks</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            size="small"
            placeholder="Search task..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              minWidth: '200px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '6px',
                fontSize: fontSize.standard
              }
            }}
          />
        </Box>
      </Box>

      {/* Task list */}
      <Box sx={{ mt: 2 }}>
        {filteredTasks.length === 0 ? (
          <Typography sx={{ color: 'gray', textAlign: 'center', mt: 4 }}>
            No tasks found.
          </Typography>
        ) : (
          filteredTasks.map((task, index) => (
            <Paper
              key={index}
              sx={{
                p: 2,
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                backgroundColor: task.completed ? '#e8f5e9' : '#fff'
              }}
            >
              <Radio
                checked={task.completed}
                onChange={() => toggleCompleted(index)}
                color="success"
              />
              <Stack spacing={0.5}>
                <Typography fontWeight="bold" sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.title}
                </Typography>
                <Typography variant="body2" color="gray">Due: {task.due}</Typography>
                <Typography variant="body2" color="gray">Status: {task.status}</Typography>
                <Typography variant="body2" color={priority(task.priority)}>Priority: {task.priority}</Typography>
              </Stack>
            </Paper>
          ))
        )}
      </Box>
    </>
  );
};

export default My_Task;

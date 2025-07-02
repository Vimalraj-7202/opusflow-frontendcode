'use client'
import React from "react";
import { Box, Paper, Typography, LinearProgress, Avatar, Button, Chip } from "@mui/material";
import { useTheme } from "@/app/theme/ThemeContext";

const Task = () => {
  const { fontSize } = useTheme();

  // Task Progress
  const taskList = ['UI/UX Design', 'Code Review', 'Quality Assurance', 'Development', 'Code Rewamp', 'Team Standup'];
  const colors = ['#dd5bd4', '#a8d7e0', '#a0d9b4', '#ffaa8a', '#f7dc8a', '#30d0f0'];

  // Recent Activity
  const activity = [
    { avatar: 'https://i.pravatar.cc/150?img=1', name: 'Vimal', description: 'Vimal Review Completed', time: '40 Minutes ago', status: 'completed' },
    { avatar: 'https://i.pravatar.cc/150?img=2', name: 'Sherin', description: 'Sherin Yet To Complete', time: '1 Hour ago', status: 'pending' },
    { avatar: 'https://i.pravatar.cc/150?img=3', name: 'Fila', description: 'Fila Added New Task', time: '1 Day ago', status: 'new' },
    { avatar: 'https://i.pravatar.cc/150?img=8', name: 'Clinton', description: 'Clinton Code Centralized', time: '1 Day ago', status: 'completed' },
    { avatar: 'https://i.pravatar.cc/150?img=4', name: 'Fino', description: 'Fino Code Centralized', time: '1 Day ago', status: 'completed' },
    { avatar: 'https://i.pravatar.cc/150?img=5', name: 'Clinton', description: 'Clinton Code Centralized', time: '1 Day ago', status: 'completed' }
  ];

  //Allocated Task members

  const members = [
    { avatar: 'https://i.pravatar.cc/150?img=1', name: 'Vimal', role: 'Frontend Developer' },
    { avatar: 'https://i.pravatar.cc/150?img=2', name: 'Brian', role: 'Senior Developer' },
    { avatar: 'https://i.pravatar.cc/150?img=3', name: 'Albie', role: 'App Developer' },
    { avatar: 'https://i.pravatar.cc/150?img=4', name: 'Clinton', role: 'Assistant Team Leader' },
    { avatar: 'https://i.pravatar.cc/150?img=5', name: 'Sherin', role: 'Quality Analyst' },
    { avatar: 'https://i.pravatar.cc/150?img=6', name: 'Fila', role: 'DevOps Engineer' },
    { avatar: 'https://i.pravatar.cc/150?img=7', name: 'Fino', role: 'UI/UX Designer' },
  ]

  //In Progress

  const progress = [
    { Department: 'Quality Assurance', Description: 'Yet to complete one module.', Priority: 'Low' },
    { Department: 'Web Design', Description: 'Yet to start.', Priority: 'High' },
    { Department: 'UI/UX Design', Description: 'Yet to complete Three module.', Priority: 'Medium' },
    { Department: 'Meeting', Description: 'Yet to start in 1 Hour.', Priority: 'Medium' }
  ]

  //Need Review

  const review = [
    { avatar: 'https://i.pravatar.cc/150?img=1', Department: 'UI/UX Design', Description: 'Dashboard UI need to review.' },
    { avatar: 'https://i.pravatar.cc/150?img=4', Department: 'Frontend Development', Description: 'Need to review code.' },
    { avatar: 'https://i.pravatar.cc/150?img=3', Department: 'Quality Assurance', Description: 'Need to sign off.' },
    { avatar: 'https://i.pravatar.cc/150?img=7', Department: 'Quality Assurance', Description: 'Need to sign off.' },
  ]

  const completed = [
    { avatar: 'https://i.pravatar.cc/150?img=3', Department: 'UI/UX Design', Description: 'Dashboard UI completed.' },
    { avatar: 'https://i.pravatar.cc/150?img=5', Department: 'Frontend Development', Description: 'Code reviewed.' },
    { avatar: 'https://i.pravatar.cc/150?img=6', Department: 'Quality Assurance', Description: 'Sign off done.' },
    { avatar: 'https://i.pravatar.cc/150?img=8', Department: 'Quality Assurance', Description: 'Team Discussion completed.' },
  ]



  const getDepartmentColor = (department: any) => {
    if (!department) return '#9c27b0';
    const key = department.trim().toLowerCase();
    if (key.startsWith('u')) return '#ad46ff';
    if (key.startsWith('d')) return '#4caf50';
    if (key.startsWith('q')) return 'teal';
    if (key.startsWith('m')) return 'skyblue';
    return '#9c27b0';
  };

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>

      {/* Task Progress */}
      <Paper
        sx={{
          p: 1,
          borderRadius: '8px',
          height: '290px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflowY: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>Task Progress</Typography>
        {taskList.map((task, index) => (
          <Box key={index}>
            <Typography sx={{ fontSize: fontSize.standard }}>
              {task}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(index + 1) * 15}
              sx={{
                mt: 1,
                borderRadius: '6px',
                height: '7px',
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: colors[index % colors.length]
                }
              }}
            />
          </Box>
        ))}
      </Paper>

      {/* Recent Activity with line indicator */}
      <Paper
        sx={{
          fontSize: fontSize.standard,
          height: '290px',
          borderRadius: '8px',
          p: 1,
          position: 'relative'
        }}
      >
        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Recent Activity</Typography>

        {/* Vertical Line inside the scroll area */}
        <Box
          sx={{
            position: 'absolute',
            left: '16px',
            top: '35px',
            bottom: '20px',
            width: '1px',
            backgroundColor: '#bdbdbd'
          }}
        />

        <Box sx={{
          maxHeight: '230px', // 290 - heading + padding
          overflowY: 'auto',
          pr: 8,
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}>
          {activity.map((list, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                mb: 2.2,
                pl: 3
              }}
            >
              {/* Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '3px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: list.status === 'completed' ? '#4caf50' : list.status === 'pending' ? '#ff9800' : '#2196f3',
                  border: '2px solid white',
                  zIndex: 1
                }}
              />

              <Avatar src={list.avatar} sx={{ width: 40, height: 40, mr: 1 }} />
              <Box>
                <Typography sx={{ fontSize: fontSize.standard }}>{list.description}</Typography>
                <Typography sx={{ fontSize: fontSize.standard, color: 'gray' }}>{list.time}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Allocated task members*/}
      <Paper sx={{
        fontSize: fontSize.standard,
        height: '290px',
        borderRadius: '8px',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowY: 'auto',
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Allocated Task Members</Typography>
        {members.map((member, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: index !== members.length - 1 ? '1px solid #e0e0e0' : 'none'
            }}
          >
            {/* Left side: Avatar + Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar src={member.avatar} sx={{ width: 40, height: 40 }} />
              <Box>
                <Typography sx={{ fontSize: fontSize.standard, fontWeight: 500 }}>{member.name}</Typography>
                <Typography sx={{ fontSize: fontSize.standard, color: 'gray' }}>{member.role}</Typography>
              </Box>
            </Box>
            <Button
              sx={{ textTransform: 'none', color: 'white', backgroundColor: '#ad46ff', height: '30px', borderRadius: '5px', '&:hover': { backgroundColor: '#8a34cc' } }}>Remove</Button>
          </Box>
        ))}
      </Paper>


      {/*In Progress */}

      <Paper sx={{
        fontSize: fontSize.standard,
        height: '290px',
        borderRadius: '8px',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowY: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}>
        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>In Progress</Typography>

        {progress.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: index !== progress.length - 1 ? '1px solid #e0e0e0' : 'none',
              pb: 1
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 0.5
              }}
            >
              {/* Department Chip with dynamic color */}
              <Chip
                label={item.Department}
                sx={{
                  height: '30px',
                  borderRadius: '5px',
                  backgroundColor: getDepartmentColor(item.Department),
                  color: 'white'
                }}
              />

              {/* Priority Chip with color based on priority */}
              <Chip
                label={item.Priority}
                sx={{
                  height: '20px',
                  borderRadius: '5px',
                  backgroundColor:
                    item.Priority === 'High' ? '#f44336' :
                      item.Priority === 'Medium' ? '#ff9800' :
                        '#4caf50',
                  color: 'white'
                }}
              />
            </Box>

            {/* Description */}
            <Typography sx={{ fontSize: fontSize.standard }}>
              {item.Description}
            </Typography>
          </Box>
        ))}
      </Paper>

      {/*Need Review*/}

      <Paper sx={{
        fontSize: fontSize.standard,
        height: '290px',
        borderRadius: '8px',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowY: 'auto',
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Need Review</Typography>

        {review.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: index !== review.length - 1 ? '1px solid #e0e0e0' : 'none',
              pb: 1
            }}
          >
            <Box>
              <Chip
                sx={{
                  height: '30px',
                  borderRadius: '5px',
                  backgroundColor: getDepartmentColor(item.Department),
                  color: 'white',
                  mb: 0.5
                }}
                label={item.Department}
              />
              <Typography>{item.Description}</Typography>
            </Box>
            <Avatar src={item.avatar} />
          </Box>
        ))}
      </Paper>


      <Paper sx={{
        fontSize: fontSize.standard,
        height: '290px',
        borderRadius: '8px',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowY: 'auto',
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Completed</Typography>

        {completed.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: index !== completed.length - 1 ? '1px solid #e0e0e0' : 'none',
              pb: 1
            }}
          >
            <Box>
              <Chip
                sx={{
                  height: '30px',
                  borderRadius: '5px',
                  backgroundColor: getDepartmentColor(item.Department),
                  color: 'white',
                  mb: 0.5
                }}
                label={item.Department}
              />
              <Typography>{item.Description}</Typography>
            </Box>
            <Avatar src={item.avatar} />
          </Box>
        ))}
      </Paper>

    </Box>
  );
};

export default Task;

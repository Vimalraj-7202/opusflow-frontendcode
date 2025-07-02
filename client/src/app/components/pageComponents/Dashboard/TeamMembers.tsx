import React from 'react'
import { Paper, Typography, Box, Divider, Avatar, Button, Chip } from '@mui/material'

const data = [
  { name: 'John Doe', email: 'john@gmail.com', tasks: { notStarted: 12, completed: 3, total: 15 }, role: 'Developer', performance: '+12% this week', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Emily Davis', email: 'emily@gmail.com', tasks: { notStarted: 5, completed: 15, total: 20 }, role: 'Manager', performance: '5% this week', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Jane Smith', email: 'jane@gmail.com', tasks: { notStarted: 2, completed: 13, total: 15 }, role: 'Designer', performance: '25% this week', avatar: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Mike Johnson', email: 'mike@gmail.com', tasks: { notStarted: 6, completed: 2, total: 8 }, role: 'QA', performance: '-5% this week', avatar: 'https://i.pravatar.cc/150?img=4' },
  { name: 'John Abrahm', email: 'johnabrahm@gmail.com', tasks: { notStarted: 6, completed: 2, total: 8 }, role: 'QA', performance: '20% this week', avatar: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Jane Smith', email: 'jane@gmail.com', tasks: { notStarted: 2, completed: 13, total: 15 }, role: 'Designer', performance: '15% this week', avatar: 'https://i.pravatar.cc/150?img=6' },
]

const TeamMembers = () => {
  return (
    <Paper sx={{ width: '100%', p: 1.5, borderRadius: '12px', height: '400px', display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontWeight: 'bold' }}>Team Members</Typography>
      <Typography sx={{ color: 'grey', mb: 2 }}>Performance overview of team members</Typography>

      {/* Headers */}
      <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', px: 1, mb: 1 }}>
        <Box sx={{ flex: 2 }}>Name</Box>
        <Box sx={{ flex: 2 }}>Tasks</Box>
        <Box sx={{ flex: 1.5 }}>Role</Box>
        <Box sx={{ flex: 1.4 }}>Performance</Box>
        <Box sx={{ flex: 1 }}>Action</Box>
      </Box>

      <Divider />

      {/* Data Rows */}
      <Box sx={{ flex: 1, overflowY: 'auto', mt: 1, '&::-webkit-scrollbar': { display: 'none' } }}>
        {data.map((member, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 1,
              py: 1.2,
              borderBottom: '1px solid #eee',
              '&:hover': { bgcolor: '#fafafa' }
            }}
          >
            {/* Name */}
            <Box sx={{ flex: 2, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar src={member.avatar} sx={{ width: 32, height: 32 }} />
              <Box>
                <Typography>{member.name}</Typography>
                <Typography sx={{ color: 'gray', fontSize: 12 }}>{member.email}</Typography>
              </Box>
            </Box>

            {/* Tasks */}
            <Box sx={{ flex: 2, display: 'flex', gap: 2 }}>
              <Box sx={{
                bgcolor: '#86cffe', width: 28, height: 28, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'
              }}>{member.tasks.notStarted}</Box>
              <Box sx={{
                bgcolor: 'green', color: 'white', width: 28, height: 28, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'
              }}>{member.tasks.completed}</Box>
              <Box sx={{
                bgcolor: 'wheat', width: 28, height: 28, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'
              }}>{member.tasks.total}</Box>
            </Box>

            {/* Role */}
            <Box sx={{ flex: 1.5 }}>
              <Typography>{member.role}</Typography>
            </Box>

            {/* Performance */}
            <Box sx={{ flex: 1.4 }}>
              <Chip
                label={member.performance}
                sx={{
                  backgroundColor: member.performance.includes('-') ? '#fee2e2' : '#dcfce7',
                  color: member.performance.includes('-') ? '#b91c1c' : '#166534',
                  borderRadius: '12px',
                  height: '28px',
                  fontSize: '12px'
                }}
              />
            </Box>

            {/* Action */}
            <Box sx={{ flex: 1 }}>
              <Button
                sx={{
                  textTransform: 'none', height: '30px', backgroundColor: '#ad46ff',
                  color: 'white', borderRadius: '6px', px: 2, ':hover': { backgroundColor: '#962fd9' }
                }}
              >
                View
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default TeamMembers

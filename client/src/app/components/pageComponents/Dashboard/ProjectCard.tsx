import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors'
import NorthEastIcon from '@mui/icons-material/NorthEast'

const ProjectCard = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        columnGap: 4,
        rowGap: 1,
      }}
    >
      {/* Total Projects */}
      <Paper sx={cardStyles}>
        <StatusIcon color="white" bg="orange">
          <WorkOutlineOutlinedIcon sx={{ fontSize: 28 }} />
        </StatusIcon>
        <CardContent title="Total Projects" value="12" trend="+2" trendColor="green" />
      </Paper>

      {/* In Progress */}
      <Paper sx={cardStyles}>
        <StatusIcon color="white" bg="#ad46ff">
          <WorkHistoryOutlinedIcon sx={{ fontSize: 28 }} />
        </StatusIcon>
        <CardContent title="In Progress" value="5" trend="+3" trendColor="green" />
      </Paper>

      {/* Completed */}
      <Paper sx={cardStyles}>
        <StatusIcon color="green" bg="lightgreen">
          <TaskAltIcon sx={{ fontSize: 28 }} />
        </StatusIcon>
        <CardContent title="Completed" value="6" trend="+2" trendColor="green" />
      </Paper>

      {/* OverDue */}
      <Paper sx={cardStyles}>
        <StatusIcon color="#ef4444" bg="#fee2e2">
          <RunningWithErrorsIcon sx={{ fontSize: 28 }} />
        </StatusIcon>
        <CardContent title="OverDue" value="1" trend="-2" trendColor="red" rotate />
      </Paper>
    </Box>
  )
}

const cardStyles = {
  p: '12px',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  height: '159px',
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const StatusIcon = ({ children, color, bg }: any) => (
  <Box sx={{
    backgroundColor: bg,
    borderRadius: '50%',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color
  }}>
    {children}
  </Box>
)

const CardContent = ({ title, value, trend, trendColor, rotate }: any) => (
  <>
    <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', alignItems: 'center' }}>
      <NorthEastIcon sx={{
        fontSize: 20,
        color: trendColor,
        mr: 0.5,
        transform: rotate ? 'rotate(96deg)' : 'none'
      }} />
      <Typography sx={{ color: trendColor }}>{trend}</Typography>
    </Box>
    <Box>
      <Typography sx={{ color: 'gray' }}>{title}</Typography>
      <Typography variant="h4">{value}</Typography>
      <Typography sx={{ color: 'gray', fontSize: 12 }}>from last month</Typography>
    </Box>
  </>
)

export default ProjectCard

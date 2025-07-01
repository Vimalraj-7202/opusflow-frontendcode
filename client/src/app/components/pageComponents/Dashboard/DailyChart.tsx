'use client'
import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'
import { useDrawingArea } from '@mui/x-charts/hooks'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

// ✅ PieChart data with color matching your background
const data = [
  { value: 5, label: 'Completed', color: 'teal' },   // white
  { value: 15, label: 'In Progress', color: '#dcb6ff' }, // light lavender
  { value: 20, label: 'Not started', color: '#ffb347' }, // peach
]

const size = {
  width: 250,
  height: 250,
}

const StyledText = styled('text')(({ theme }) => ({
  fill: '#ffffff', // center text white for best contrast
  textAnchor: 'middle',
  dominantBaseline: 'middle',
  fontSize: 20,
  fontWeight: 600,
}))

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea()
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  )
}

const DailyChart = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        height: '340px',
        p: '16px',
        borderRadius: 2,
        boxShadow: 3
      }}
    >
      <Typography sx={{ fontWeight: 'bold', mb: 1, color: 'black' }}>
        My Progress
      </Typography>
      <Typography sx={{ color: 'grey', mb: 2 }}>
        Your task completion rate
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PieChart
            series={[
              {
                data,
                innerRadius:70,
                paddingAngle:3
              },
            ]}
            {...size}
          >
          </PieChart>
      </Box>
    </Paper>
  )
}

export default DailyChart

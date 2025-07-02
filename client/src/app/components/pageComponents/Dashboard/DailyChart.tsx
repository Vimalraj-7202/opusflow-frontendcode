'use client'
import React from 'react'
import { Paper, Typography, Box, Stack, Chip } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'

const data = [
  { value: 9, label: 'Completed', color: 'lightgreen' },
  { value: 12, label: 'In Progress', color: '#ba68c8' },
  { value: 16, label: 'Not Started', color: '#ffb74d' },
]

const size = {
  width: 240,
  height: 220,
}

function PieCenterLabelFixed({ children }: any) {
  return (
    <text
      x={size.width / 2}
      y={size.height / 2}
      fontSize="22"
      fontWeight="700"
      fontFamily="sans-serif"
      fill="#333"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      {children}
    </text>
  )
}

const DailyChart = () => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0)

  return (
    <Paper
      sx={{
        width: '100%',
        height: '350px',
        p:1.5,
        borderRadius: 4,
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        bgcolor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box sx={{ width: '100%', textAlign: 'left' }}>
        <Typography fontWeight="bold" color="black" mb={0.5}>
          My Progress
        </Typography>
        <Typography variant="body2" color="grey.600" mb={1}>
          Your task completion rate this week
        </Typography>
      </Box>

      <Box sx={{ mx: 'auto', display: 'flex', justifyContent: 'center' }}>
        <PieChart
          series={[
            {
              data,
              innerRadius: 80,
              outerRadius: 110,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          {...size}
        >
          <PieCenterLabelFixed>Total: {total}</PieCenterLabelFixed>
        </PieChart>
      </Box>

      <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" mt={1}>
        {data.map((item) => (
          <Chip
            key={item.label}
            label={`${item.label}: ${item.value}`}
            sx={{
              bgcolor: item.color,
              color: '#fff',
              fontWeight: 500,
              px: 1.5,
            }}
            size="small"
          />
        ))}
      </Stack>
    </Paper>
  )
}

export default DailyChart

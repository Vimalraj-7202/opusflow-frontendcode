'use client'
import React from 'react'
import { Paper, Typography, Box, Stack, Chip } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'

const data = [
  { value: 9, label: 'Completed', color: '#00897b' },
  { value: 12, label: 'In Progress', color: '#ba68c8' },
  { value: 16, label: 'Not Started', color: '#ffb74d' },
]

const size = {
  width: 240,
  height: 220,
}

// ✅ Pure SVG text for reliable center label
function PieCenterLabelFixed({ children}:any) {
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
        p: '12px',
        height: '350px',
        borderRadius: 4,
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        bgcolor: '#fff',
      }}
    >
      <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
        My Progress
      </Typography>
      <Typography variant="body2" color="grey.600" mb={3}>
        Your task completion rate this week
      </Typography>

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <PieChart
          series={[
            {
              data,
              innerRadius: 90,
              outerRadius: 110,
              paddingAngle: 6,
              cornerRadius: 5,
            },
          ]}
          {...size}
        >
          <PieCenterLabelFixed>Total:{total}</PieCenterLabelFixed>
        </PieChart>

        <Stack direction="row" spacing={1} justifyContent="center" mt={1}>
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
      </Box>
    </Paper>
  )
}

export default DailyChart

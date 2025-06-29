'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'

const Topbar = () => {
  return (
    <Box
      sx={{
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        mt:'2px',
        bgcolor: 'white',
        color: 'black',
        borderRadius:'8px'
      }}
    >
      <Typography  fontWeight="bold">
        OpusFlow
      </Typography>
      <Typography variant="body2">
        Hello, Vimal
      </Typography>
    </Box>
  )
}

export default Topbar

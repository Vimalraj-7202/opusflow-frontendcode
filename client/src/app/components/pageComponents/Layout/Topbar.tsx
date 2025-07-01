'use client'
import React from 'react'
import { Box, Typography,Avatar } from '@mui/material'

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
       <Avatar src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'/>
    </Box>
  )
}

export default Topbar

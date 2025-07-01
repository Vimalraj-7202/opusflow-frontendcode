'use client'
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Notes = () => {
  const [isEditable, setIsEditable] = useState(false)
  const [noteText, setNoteText] = useState('Write your notes here...')

  return (
    <Paper 
      sx={{ 
        width: '100%', 
        height: '400px', 
        borderRadius:'12px',
        p:1.5, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}
    >
      {/* Top: Title */}
      <Box>
        <Typography sx={{ fontWeight: 'bold' }}>Notes</Typography>
        <Typography sx={{ color: 'gray' }}>Your personal notes</Typography>
      </Box>

      {/* Middle: Writing area */}
      <Box sx={{ flex: 1, my: 2 }}>
        <TextField
          fullWidth
          multiline
          minRows={10}
          disabled={!isEditable}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          onBlur={() => setIsEditable(false)} // auto save on focus out
          sx={{
            '& .Mui-disabled': {
              bgcolor: '#f9f9f9',
              color: 'gray'
            }
          }}
        />
      </Box>

      {/* Bottom: Divider + Buttons */}
      <Box>
        <Divider sx={{ mb: 1 }} />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            sx={{ 
              color: 'white', 
              textTransform: 'none', 
              height: '30px', 
              backgroundColor: '#ad46ff' 
            }}
            onClick={() => {
              setIsEditable(true)
              setNoteText('')
            }}
          >
            Add Note
          </Button>
          <Button 
            sx={{ 
              color: 'white', 
              textTransform: 'none', 
              height: '30px', 
              backgroundColor: 'orange' 
            }}
            onClick={() => setIsEditable(true)}
          >
            Edit Note
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default Notes

import React, { useState } from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useTheme } from '@/app/theme/ThemeContext'

const PersonalNotes = () => {
  const [text, setText] = useState('')
  const [editable, setIsEditable] = useState(false)
  const { colors, fontSize } = useTheme()

  return (
    <Box p={2} width="100%">
      {/* Heading */}
      <Box mb={1}>
        <Typography
          sx={{
            fontSize: fontSize.base,
            color:'black'
          }}
        >
          Personal Notes
        </Typography>
        <Typography sx={{ fontSize: fontSize.standard, color: 'gray' }}>
          You can take your own notes here.
        </Typography>
      </Box>

      {/* Notes Area */}
      <Paper elevation={3} sx={{ p: 2, borderRadius: '12px', width: '96%',height:'400px' }}>
        <TextField
          multiline
          minRows={16.5}
          maxRows={20}
          fullWidth
          variant="outlined"
          placeholder="Write your notes here..."
          value={text}
          disabled={!editable}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => setIsEditable(false)}
          sx={{
            '& .MuiInputBase-root': {
              fontSize: fontSize.standard,
              alignItems: 'flex-start'
            },
            '& textarea': {
              textAlign: 'left'
            }
          }}
        />
      </Paper>

      {/* Buttons */}
      <Box display="flex" gap={2} mt={2}>
        <Button
          onClick={() => setIsEditable(true)}
          sx={{
            textTransform: 'none',
            bgcolor: 'orange',
            color: 'white',
            px: 3,
            '&:hover': {
              bgcolor: '#ff9800'
            }
          }}
        >
          Add Note
        </Button>
        <Button
          onClick={() => setIsEditable(true)}
          sx={{
            textTransform: 'none',
            bgcolor: '#ad46ff',
            color: 'white',
            px: 3,
            '&:hover': {
              bgcolor: '#9c27b0'
            }
          }}
        >
          Edit Note
        </Button>
      </Box>
    </Box>
  )
}

export default PersonalNotes

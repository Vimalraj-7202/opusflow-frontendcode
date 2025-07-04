'use client'
import React, { useState } from 'react'
import { Avatar, Box, Typography, IconButton } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'

const team_members = [
  { name: "Linus Torvalds", avatar: "https://avatars.githubusercontent.com/u/1024025?v=4" },
  { name: "Dan Abramov", avatar: "https://avatars.githubusercontent.com/u/810438?v=4" },
  { name: "Ryan Dahl", avatar: "https://avatars.githubusercontent.com/u/80?v=4" },
  { name: "Evan You", avatar: "https://avatars.githubusercontent.com/u/499550?v=4" },
  { name: "Guillermo Rauch", avatar: "https://avatars.githubusercontent.com/u/13041?v=4" },
  { name: "Rich Harris", avatar: "https://avatars.githubusercontent.com/u/1162160?v=4" },
  { name: "TJ Holowaychuk", avatar: "https://avatars.githubusercontent.com/u/25254?v=4" },
  { name: "Jake Archibald", avatar: "https://avatars.githubusercontent.com/u/234804?v=4" },
  { name: "Addy Osmani", avatar: "https://avatars.githubusercontent.com/u/110953?v=4" },
  { name: "Kent C. Dodds", avatar: "https://avatars.githubusercontent.com/u/1500684?v=4" },
  { name: "Sarah Drasner", avatar: "https://avatars.githubusercontent.com/u/2281088?v=4" },
  { name: "Sebastian Markbåge", avatar: "https://avatars.githubusercontent.com/u/63648?v=4" },
  { name: "Misko Hevery", avatar: "https://avatars.githubusercontent.com/u/111951?v=4" },
  { name: "John Resig", avatar: "https://avatars.githubusercontent.com/u/2812?v=4" },
  { name: "Tom Preston-Werner", avatar: "https://avatars.githubusercontent.com/u/1?v=4" },
  { name: "Bramus Van Damme", avatar: "https://avatars.githubusercontent.com/u/794651?v=4" },
  { name: "Theodore Vorillas", avatar: "https://avatars.githubusercontent.com/u/1541014?v=4" },
  { name: "Paul Irish", avatar: "https://avatars.githubusercontent.com/u/39191?v=4" },
  { name: "Una Kravets", avatar: "https://avatars.githubusercontent.com/u/1915989?v=4" },
  { name: "Feross Aboukhadijeh", avatar: "https://avatars.githubusercontent.com/u/121766?v=4" }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <Box sx={{ 
      display: 'flex', 
      height: '87vh', 
      border: '1px solid #ddd', 
      borderRadius: 2, 
      overflow: 'hidden' 
    }}>

      {/* Left chat list */}
      <Box sx={{ 
        width: '300px', 
        borderRight: '1px solid #ddd', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Typography variant="h5" sx={{ p: 2, borderBottom: '1px solid #ddd' }}>
          Chats
        </Typography>
        <Box sx={{ 
          flexGrow: 1, 
          overflowY: 'auto', 
          p: 1,
          '&::-webkit-scrollbar': { display: 'none' }
        }}>
          {team_members.map((member, index) => (
            <Box 
              key={index}
              onClick={() => setSelectedMember(member)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 1,
                borderRadius: 1,
                backgroundColor: selectedMember?.name === member.name ? '#e0e0e0' : 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': { backgroundColor: '#f5f5f5' }
              }}
            >
              <Avatar src={member.avatar} alt={member.name} />
              <Typography>{member.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right chat area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Chat header */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p:1.5,
          borderBottom: '1px solid #ddd',
          minHeight: '18px'
        }}>
          {selectedMember ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap:1 }}>
                <Avatar src={selectedMember.avatar} alt={selectedMember.name} />
                <Typography variant="h6">{selectedMember.name}</Typography>
              </Box>
              <IconButton>
                <PhoneIcon color="primary" />
              </IconButton>
            </>
          ) : (
            <Typography variant="h6" sx={{ color: 'gray' }}>
              Welcome
            </Typography>
          )}
        </Box>

        {/* Chat content */}
        <Box sx={{ 
          flexGrow: 1, 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {selectedMember ? (
            <>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Start chatting with <strong>{selectedMember.name}</strong>!
              </Typography>
              <Typography sx={{ color: 'gray' }}>
                This is your chat area. Messages will appear here.
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h4" sx={{ mb: 2, color: '#555' }}>
                Start a meeting or chat with your team!
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray' }}>
                Select a person on the left to begin.
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Team

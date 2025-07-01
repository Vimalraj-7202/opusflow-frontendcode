'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Box, List, ListItemButton, ListItemIcon } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import WorkIcon from '@mui/icons-material/WorkHistory';
import GroupIcon from '@mui/icons-material/Group'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import LogoutIcon from '@mui/icons-material/LogoutOutlined'

const iconSize=35;

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { icon: <DashboardIcon sx={{ fontSize: iconSize }} />, path: '/dashboard' },
    { icon: <WorkIcon sx={{ fontSize: iconSize }} />, path: '/my_works' },
    { icon: <GroupIcon sx={{ fontSize: iconSize }} />, path: '/team' },
    { icon: <NotificationsIcon sx={{ fontSize: iconSize }} />, path: '/notifications' },
    { icon: <SettingsIcon sx={{ fontSize: iconSize }} />, path: '/settings' },
    { icon: <AdminPanelSettingsIcon sx={{ fontSize: iconSize }} />, path: '/admin' }
  ]

  return (
    <Box 
      sx={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // pushes logout to bottom
        alignItems: 'center',
        py: 2
      }}
    >
      {/* Top nav items */}
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {navItems.map((item, idx) => (
          <ListItemButton
            key={idx}
            disableRipple
            disableTouchRipple
            onClick={() => router.push(item.path)}
            sx={{
              justifyContent: 'center',
              mb: 1,
              '&:hover': {
                bgcolor: 'transparent'
              }
            }}
          >
            <ListItemIcon 
              sx={{ 
                minWidth: 'auto', 
                color: 'white',
                filter: pathname === item.path ? 'drop-shadow(0 0 6px black)' : 'none',
              }}
            >
              {item.icon}
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>

      {/* Logout at bottom */}
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ListItemButton
          disableRipple
          disableTouchRipple
          onClick={() => router.push('/logout')}
          sx={{
            justifyContent: 'center',
            '&:hover': {
              bgcolor: 'transparent'
            },
            '&:hover .MuiListItemIcon-root': {
              filter: 'drop-shadow(0 0 6px white)'
            }
          }}
        >
          <ListItemIcon 
            sx={{ 
              minWidth: 'auto', 
              color: 'black',
              filter: pathname === '/logout' ? 'drop-shadow(0 0 7px white)' : 'none'
            }}
          >
            <LogoutIcon sx={{ fontSize: iconSize }} />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  )
}

export default Sidebar

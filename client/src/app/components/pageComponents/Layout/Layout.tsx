'use client'
import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'

const Layout = ({ children }: any) => {
    return (
        <Box
            sx={{
                height: '100vh',
                p: '6px',
                bgcolor: '#efeeff',
                boxSizing: 'border-box'
            }}
        >
            <Box sx={{ display: 'flex', height: '100%', gap: 1 }}>
                {/* Sidebar */}
                <Box
                    sx={{
                        width: '60px',
                        background: 'linear-gradient(179.14deg, #0A43A0 -25.07%, #AD00AE 57.8%, #0A43A0 135.32%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        py: 2,
                        flexShrink: 0
                    }}
                >
                    <Sidebar />
                </Box>

                {/* Right Side */}
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {/* Topbar */}
                    <Box sx={{ height: '60px'}}>
                        <Topbar />
                    </Box>

                    {/* Main Content */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            p: 2,
                            bgcolor: 'white',
                            borderRadius: '8px',
                            overflow: 'hidden', 
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollbarWidth: 'none', // for Firefox
                            msOverflowStyle: 'none' // for IE/Edge
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout

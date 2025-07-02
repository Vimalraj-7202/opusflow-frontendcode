'use client'
import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import Task from '@/app/components/pageComponents/My_works/Task_Management'
import My_Task from '@/app/components/pageComponents/My_works/My_Task'
import ActivityLog from '@/app/components/pageComponents/My_works/ActivityLog'
import PersonalNotes from '@/app/components/pageComponents/My_works/PersonalNotes'
import Documents from '@/app/components/pageComponents/My_works/Documents'


const TabPanel = ({ children, value, index }:any) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 1 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

const TaskManagementPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabs = [
    { key: 'Taskmanagement', label: 'Task Management' },
    { key: 'My_Task', label: 'My Task' },
    { key: 'Activity_Log', label: 'Activity Log' },
    { key: 'Personal_Notes', label: 'Personal Notes' },
    { key: 'Doucuments', label: 'Documents' },
  ];

  const tabParam = searchParams.get('tab') || 'taskmanagement'
  const currentIndex = tabs.findIndex(t => t.key === tabParam)
  const safeIndex = currentIndex >= 0 ? currentIndex : 0

  const handleChange = (_: any, newValue: any) => {
    router.push(`?tab=${tabs[newValue].key}`)
  }

  return (
    <Box sx={{ height: 'calc(100vh - 80px)',display: 'flex',flexDirection: 'column'}}>

      <Box sx={{ position: 'sticky',top: 0,backgroundColor: 'white',zIndex: 1}}>

        <Tabs
          value={safeIndex}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{ mb: 1 }}>
            
          {tabs.map((tab, index) => (
            <Tab
              key={tab.key}
              label={tab.label}
              sx={{
                textTransform: 'none',
                fontSize: '17px',
                color: safeIndex === index ? '#ad46ff' : 'gray'
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          '&::-webkit-scrollbar':{ display: 'none'}

        }}
      >
        <TabPanel value={safeIndex} index={0}>
          <Task />
        </TabPanel>
        <TabPanel value={safeIndex} index={1}>
          <My_Task/>
        </TabPanel>
        <TabPanel value={safeIndex} index={2}>
          <ActivityLog/>
        </TabPanel>
        <TabPanel value={safeIndex} index={3}>
          <PersonalNotes/>
        </TabPanel>
          <TabPanel value={safeIndex} index={4}>
          <Documents/>
        </TabPanel>
      </Box>
    </Box>
  )
}

export default TaskManagementPage

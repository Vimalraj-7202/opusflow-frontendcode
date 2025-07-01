import React from 'react'
import Calendar from '@/app/components/pageComponents/Dashboard/Calendar'
import DailyChart from '@/app/components/pageComponents/Dashboard/DailyChart'
import Card from '@/app/components/pageComponents/Dashboard/ProjectCard'
import { Box, Grid } from '@mui/material'
import TeamMembers from '@/app/components/pageComponents/Dashboard/TeamMembers'
import Notes from '@/app/components/pageComponents/Dashboard/Notes'
const Index = () => {
  return (
    <Box>
      <Grid container spacing={5}>
        <Grid size={{xs:12 ,sm:6 ,md:3}}>
          <Calendar />
        </Grid>
        <Grid size={{xs:12 ,sm:6,md:4.3}}>
          <Card />
        </Grid>
        <Grid size={{xs:12, sm:12, md:4.5}}>
          <DailyChart />
        </Grid>


        <Grid size={{xs:12,sm:12,md:7}}>
            <TeamMembers />
        </Grid>
        <Grid size={{xs:12,sm:12,md:5}}>
          <Notes/>
        </Grid>
      </Grid>

      </Box>
  )
}

export default Index

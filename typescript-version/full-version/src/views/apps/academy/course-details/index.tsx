'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { CourseDetails } from '@/types/apps/academyTypes'

// Component Imports
import Details from './Details'
import Sidebar from './Sidebar'

const AcademyCourseDetails = ({ courseDetails }: { courseDetails: CourseDetails }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <Details data={courseDetails} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Sidebar content={courseDetails.content} />
      </Grid>
    </Grid>
  )
}

export default AcademyCourseDetails

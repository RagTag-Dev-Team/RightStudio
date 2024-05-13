// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { Course } from '@/types/apps/academyTypes'

// Component Imports
import WelcomeCard from './WelcomeCard'
import InterestedTopics from './InterestedTopics'
import PopularInstructors from './PopularInstructors'
import TopCourses from './TopCourses'
import UpcomingWebinar from './UpcomingWebinar'
import AssignmentProgress from './AssignmentProgress'
import CourseTable from './CourseTable'

const AcademyDashboard = ({ courseData }: { courseData: Course[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <WelcomeCard />
      </Grid>
      <Grid item xs={12} md={8}>
        <InterestedTopics />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PopularInstructors />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TopCourses />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <UpcomingWebinar />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <AssignmentProgress />
      </Grid>
      <Grid item xs={12}>
        <CourseTable courseData={courseData} />
      </Grid>
    </Grid>
  )
}

export default AcademyDashboard

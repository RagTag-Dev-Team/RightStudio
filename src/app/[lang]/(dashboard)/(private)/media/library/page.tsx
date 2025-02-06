// Next Imports

// MUI Imports
import Grid from '@mui/material/Grid'

// Component imports
import MediaLibrary from '@/views/media/MediaLibrary'

const MediaLibraryPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <MediaLibrary />
      </Grid>
    </Grid>
  )
}

export default MediaLibraryPage

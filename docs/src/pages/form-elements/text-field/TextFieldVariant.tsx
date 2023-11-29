// MUI Imports
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const TextFieldVariant = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <TextField fullWidth id="outlined-basic" label="Outlined" />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField fullWidth id="filled-basic" label="Filled" variant="filled" />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField
        fullWidth
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
      </Grid>
    </Grid>
  );
};

export default TextFieldVariant;

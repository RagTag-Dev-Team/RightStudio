// React Imports
import React from "react";

// MUI Imports
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const TextFieldLayout = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Full width"
          id="outlined-full-width"
          className='mbe-4'
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          label="None"
          className='mie-4'
          id="outlined-margin-none"
          defaultValue="Margin None"
          helperText="Some important text"
        />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField
        fullWidth
        label="Dense"
        margin="dense"
        className='mie'
        id="outlined-margin-dense"
        defaultValue="Margin Dense"
        helperText="Some important text"
      />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField
        fullWidth
        label="Normal"
        margin="normal"
        id="outlined-margin-normal"
        defaultValue="Margin Normal"
        helperText="Some important text"
      />
      </Grid>
    </Grid>
  );
};

export default TextFieldLayout;

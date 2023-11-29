// React Imports
import { useState } from "react"
import type { ChangeEvent } from "react"

// MUI Imports
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

const TextareaVariant = () => {
  // States
  const [value, setValue] = useState<string>("Controlled")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={value}
          label="Multiline"
          onChange={handleChange}
          id="textarea-outlined-controlled"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          multiline
          id="textarea-outlined"
          placeholder="Placeholder"
          label="Multiline Placeholder"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          rows={4}
          multiline
          label="Multiline"
          defaultValue="Default Value"
          id="textarea-outlined-static"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={value}
          variant="filled"
          label="Multiline"
          onChange={handleChange}
          id="textarea-filled-controlled"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          multiline
          variant="filled"
          id="textarea-filled"
          placeholder="Placeholder"
          label="Multiline Placeholder"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          rows={4}
          multiline
          variant="filled"
          label="Multiline"
          id="textarea-filled-static"
          defaultValue="Default Value"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={value}
          label="Multiline"
          variant="standard"
          onChange={handleChange}
          id="textarea-standard-controlled"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          multiline
          variant="standard"
          id="textarea-standard"
          placeholder="Placeholder"
          label="Multiline Placeholder"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          rows={4}
          multiline
          label="Multiline"
          variant="standard"
          defaultValue="Default Value"
          id="textarea-standard-static"
        />
      </Grid>
    </Grid>
  )
}

export default TextareaVariant

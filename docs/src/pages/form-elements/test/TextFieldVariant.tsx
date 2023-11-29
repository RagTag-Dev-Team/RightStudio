// MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import MuiInputBase from "@mui/material/InputBase";
import type { InputBaseProps } from "@mui/material/InputBase";

// Styles Imports
import styles from "./styles.module.css";

// Styled InputBase component
const InputBase = styled(MuiInputBase)<InputBaseProps>(({ theme }) => ({
  marginTop: theme.spacing(4),
  "& .MuiInputBase-input": {
    fontSize: 16,
    borderRadius: 4,
    padding: '10px 12px',
    position: 'relative',
    backgroundColor: 'var(--mui-palette-background-paper)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: theme.palette.mode === 'light' ? '1px solid #ced4da' : '1px solid var(--mui-palette-divider)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderColor: 'var(--mui-palette-primary-main)',
      boxShadow: '0 0 0 0.2rem rgb(var(--mui-palette-primary-mainChannel) / 0.25)'
    }
  },
}));

const TextFieldVariant = () => {
  return (
    <Card>
      <CardHeader title="Variants" />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Outlined" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Filled" variant="filled" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Standard" variant="standard" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth disabled label="Disabled Outlined" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth disabled label="Disabled Filled" variant="filled" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth disabled label="Disabled Standard" variant="standard" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth size="small" label="Small Outlined" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth size="small" label="Small Filled" variant="filled" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth size="small" label="Small Standard" variant="standard" />
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Typography variant="h6" className='mbe-2'>
          Customized
        </Typography>
        <Box component="form" noValidate autoComplete="off" >
          <FormControl fullWidth variant="standard">
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              className={styles.textFieldTranslate}
            >
              Bootstrap
            </InputLabel>
            <InputBase defaultValue="react-bootstrap" id="bootstrap-input" />
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TextFieldVariant;

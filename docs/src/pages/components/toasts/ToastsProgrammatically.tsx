// React Imports
import React, { useRef } from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Third-party Imports
import { toast } from "react-toastify";

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ToastsProgrammatically = () => {
  const toastId = useRef(null);

  const notify = () => (toastId.current = toast("Lorem ipsum dolor"));

  const dismiss = () => toast.dismiss(toastId.current);

  const dismissAll = () => toast.dismiss();

  return (
    <Box
     sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    > 
      <Icon icon='mdi:code-json' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 500 }}>Remove Programmatically</Typography>
      <Typography sx={{ mb: 3 }}>Remove last or all toast(s) programmatically</Typography>
      <Box sx={{ display: 'flex', gap: '1rem', mb: 8}}>
        <Button variant='contained' onClick={notify}>Notify</Button>
        <Button variant='contained' onClick={dismiss}>Dismiss</Button>
        <Button variant='contained' onClick={dismissAll}>Dismiss All</Button>
      </Box>
    </Box>
  );
};

export default ToastsProgrammatically;

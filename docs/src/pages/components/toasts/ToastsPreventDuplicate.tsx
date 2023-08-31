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

const ToastsPreventDuplicate = () => {
    const toastId = useRef(null);
  
    const notify = () => {
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast("I cannot be duplicated!");
      }
    }

  return (
    <Box
     sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:clipboard-off-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 500 }}>Prevent Duplicate</Typography>
      <Typography sx={{ mb: 3 }}>Prevent duplicate toasts from being created.</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={notify}>Notify</Button>
    </Box>
  );
};

export default ToastsPreventDuplicate;

// React Imports
import { useRef } from "react";

// MUI Imports
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Third-party Imports
import { toast } from "react-toastify";

const ToastsPreventDuplicate = () => {
    const toastId = useRef(null);
  
    const notify = () => {
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast("I cannot be duplicated!");
      }
    }

  return (
    <div
    className='flex text-center flex-col items-center'
    >
      <i className='ri-clipboard-line mbe-2 text-[28px]'/>
      <Typography className='mbe-4' variant='h5'>Prevent Duplicate</Typography>
      <Typography className='mbe-3'>Prevent duplicate toasts from being created.</Typography>
      <Button className='mbe-8'variant='contained' onClick={notify}>Notify</Button>
    </div>
  );
};

export default ToastsPreventDuplicate;

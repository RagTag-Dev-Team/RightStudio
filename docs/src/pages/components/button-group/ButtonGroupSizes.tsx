// React Imports
import React from "react";

// MUI Imports
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const ButtonGroupSizes = () => {
  return (
    <div className='flex flex-col gap-4 items-start'>
      <ButtonGroup size="small">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="medium">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="large">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupSizes;

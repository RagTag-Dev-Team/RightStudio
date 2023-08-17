// React Imports
import React from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const ButtonGroupSizes = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, alignItems: 'flex-start' }}>
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
    </Box>
  );
};

export default ButtonGroupSizes;

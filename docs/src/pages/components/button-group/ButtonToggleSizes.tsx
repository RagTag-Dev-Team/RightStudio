// React Imports
import React, { useState } from "react";
import type { MouseEvent } from "react";

// MUI Imports
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ButtonToggleSizes = () => {
  // States
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className='flex flex-col gap-4 items-start'>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={alignment}
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <i className="ri-align-left" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="center aligned">
          <i className="ri-align-center" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <i className="ri-align-right" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <i className="ri-align-justify" />
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        exclusive
        value={alignment}
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <i className="ri-align-left" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="center aligned">
          <i className="ri-align-center" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <i className="ri-align-right" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <i className="ri-align-justify" />
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        exclusive
        size="large"
        value={alignment}
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <i className="ri-align-left" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="center aligned">
          <i className="ri-align-center" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <i className="ri-align-right" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <i className="ri-align-justify" />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ButtonToggleSizes;

// MUI Imports
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckboxSizes = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        label="Small"
        control={<Checkbox size="small" defaultChecked name="size-small" />}
      />
      <FormControlLabel
        label="Default"
        control={<Checkbox defaultChecked name="size-default" />}
      />
    </FormGroup>
  );
};

export default CheckboxSizes;

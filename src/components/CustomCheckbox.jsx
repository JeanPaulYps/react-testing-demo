import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

function CustomCheckbox({ inputName, label }) {
  const [checked, setChecked] = useState(false);
  const handleChange = ({ target }) => setChecked(target.checked);
  return (
    <FormControlLabel
      htmlFor={inputName}
      label={label}
      control={
        <Checkbox checked={checked} onChange={handleChange} id={inputName} />
      }
    />
  );
}

export { CustomCheckbox };

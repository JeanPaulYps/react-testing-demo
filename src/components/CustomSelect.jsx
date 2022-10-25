import React, { useState } from "react";
import { InputLabel, Select, FormControl } from "@mui/material";

function CustomSelect({ inputName, label, options }) {
  const [selection, setSelection] = useState("");
  const handleChange = ({ target }) => setSelection(target.value);
  return (
    <>
      <InputLabel htmlFor={inputName}>{label}</InputLabel>
      <FormControl>
        <Select
          labelId={inputName}
          id={inputName}
          value={selection}
          onChange={handleChange}
          native
        >
          {options.map(({ value, text }) => (
            <option value={value} key={value}>
              {text}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export { CustomSelect };

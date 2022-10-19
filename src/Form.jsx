import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";

function RenderInput({ children, inputName, label }) {
  const [data, setData] = useState("");
  return React.cloneElement(children, {
    inputName,
    label,
    id: inputName,
    value: data,
    onChange: (event) => setData(event.target.value),
    label,
  });
}

function CustomSelect({ inputName, label, options, value, onChange }) {
  return (
    <>
      <FormControl>
        <InputLabel  htmlFor={inputName}>
          {label}
        </InputLabel>
        <Select
          labelId={inputName}
          id={inputName}
          value={value}
          onChange={onChange}
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

function CustomCheckbox({ inputName, label }) {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
      inputProps={{ "aria-label": label }}
      id={inputName}
    />
  );
}

function Form() {
  return (
    <>
      <RenderInput inputName="name" label="Nombre">
        <TextField />
      </RenderInput>
      <RenderInput inputName="age" label="Edad">
        <CustomSelect
          options={[
            { value: "", text: "empty" },
            { value: 10, text: "Ten" },
            { value: 20, text: "Twenty" },
            { value: 30, text: "Thirty" },
          ]}
        />
      </RenderInput>
      <br />
      <CustomCheckbox inputName="Checkbox" label="Checkbox" />
    </>
  );
}

export default Form;

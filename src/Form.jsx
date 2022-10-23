import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";

function CustomInput({ inputName, label }) {
  const [data, setData] = useState("");
  const handleChange = ({ target }) => setData(target.value);
  return (
    <TextField
      label={label}
      id={inputName}
      value={data}
      onChange={handleChange}
    />
  );
}

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

function Form() {
  return (
    <>
      <CustomInput inputName="name" label="Nombre" />
      <CustomSelect
        inputName="age"
        label="Edad"
        options={[
          { value: "", text: "Empty" },
          { value: 10, text: "Ten" },
          { value: 20, text: "Twenty" },
          { value: 30, text: "Thirty" },
        ]}
      />
      <br />
      <CustomCheckbox
        label="¿Deseas suscribirte?"
        inputName={"enableSuscription"}
      />
      <CustomCheckbox
        label="¿Aceptas terminos y condiciones?"
        inputName={"termsAndCondtions"}
      />
    </>
  );
}

export default Form;

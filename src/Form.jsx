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
      inputName={inputName}
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

function CustomCheckbox({ label, options }) {
  const createCheckbox = (options) => {
    const intialState = {}
    options.forEach(({value}) => intialState[value] = false);
    return intialState;
  }
  const [checked, setChecked] = useState(createCheckbox(options));
  const handleChange = (event) => {
    setChecked((checkboxes) =>  ({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    }));
  };
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {options.map(({ value, text }) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={checked[value]}
                onChange={handleChange}
                name={value}
                key={value}
              />
            }
            label={text}
          />
        ))}
      </FormGroup>
    </FormControl>
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
          { value: "", text: "empty" },
          { value: 10, text: "Ten" },
          { value: 20, text: "Twenty" },
          { value: 30, text: "Thirty" },
        ]}
      />
      <br />
      <CustomCheckbox inputName="Checkbox" label="" options={[{text: "Aceptas terminos y condiciones", value:"TermsAndConditions"}]}/>
      <CustomCheckbox inputName="Checkbox" label="" options={[{text: "Deseas suscribirte", value:"suscription"}]}/>
    </>
  );
}

export default Form;

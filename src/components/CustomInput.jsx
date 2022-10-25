import React, { useState } from "react";
import { TextField } from "@mui/material";

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

export { CustomInput };

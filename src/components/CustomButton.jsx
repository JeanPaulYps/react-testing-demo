import React from "react";
import { Button } from "@mui/material";

function CustomButton({ text, disabled, onClick }) {
  return (
    <Button disabled={disabled} onClick={onClick} variant="contained">
      {text}
    </Button>
  );
}

export { CustomButton };

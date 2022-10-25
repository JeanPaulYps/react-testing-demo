import { Box } from "@mui/material";
import React from "react";
import {
  CustomButton,
  CustomCheckbox,
  CustomInput,
  CustomSelect,
} from "../components";

function Form() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "97%",
        height: "97vh",
        display: "grid",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
        <br />
        <CustomCheckbox
          label="¿Aceptas terminos y condiciones?"
          inputName={"termsAndCondtions"}
        />
        <br />
        <CustomButton text="Enviar" />
      </Box>
    </Box>
  );
}

export default Form;

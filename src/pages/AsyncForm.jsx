import React, { useEffect, useState } from "react";
import { CustomSelect } from "../components";


function getGender() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          value: "H",
          text: "Hombre",
        },
        {
          value: "M",
          text: "Mujer",
        },
      ]);
    }, 200);
  });
}

function AsyncForm() {
  const [genderOptions, setGenderOptions] = useState([]);
  useEffect(() => {
    const getGenderOptions = async () => {
      const genders = await getGender();
      setGenderOptions(genders);
    };
    getGenderOptions();
  }, []);
  useEffect(() => {
    const getGenderOptions = async () => {
      const genders = await getGender();
      setGenderOptions(genders);
    };
    getGenderOptions();
  }, []);
  return (
    <CustomSelect inputName="gender" label="Género" options={genderOptions} />
  );
}

export default AsyncForm;

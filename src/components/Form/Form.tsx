import { InputData } from "src/App";
import FormInput from "./FormInput/FormInput";
import styles from "../Form/form.module.scss";
import React from "react";
import { useRef } from "react";

type FormProps = {
  onSubmit: (FormData: FormData) => void;
  inputsData: InputData[];
};

const Form = ({ onSubmit, inputsData }: FormProps) => {
  const formRef = useRef(null);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (formRef.current === null) return;

    const formData = new FormData(formRef.current);
    onSubmit(formData);
  };

  const inputs = inputsData.map((inputData) => (
    <FormInput
      labelText={inputData.labelText}
      name={inputData.name}
      type={inputData.type}
      pattern={inputData.pattern}
      key={inputData.key}
    />
  ));

  return (
    <>
      <form ref={formRef} className={styles.form}>
        <legend>Full name</legend>
        {inputs}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

import React, { useRef } from "react";
import { useId } from "react";
import { InputData } from "src/App";
import Input from "../../Input/Input";

type FormInputProps = InputData;

const FormInput = ({
  labelText,
  type = "text",
  name,
  pattern,
}: FormInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();


  const handleInput = () => {
    if (inputRef.current === null) return;
    const regexp = new RegExp("^" + pattern + "$", "ig");
    const isValidValue = regexp.test(inputRef.current.value);
    inputRef.current.dataset.isValid = isValidValue.toString();

  };
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <Input
        ref={inputRef}
        id={id}
        type={type}
        name={name}
        onInput={handleInput}
      />
    </>
  );
};

export default FormInput;

// setIsValid(regexp.test(e.target.value))

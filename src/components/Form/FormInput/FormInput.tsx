import React, { useRef } from "react";
import { useId, useState } from "react";
import { InputData } from "src/App";
import Input from "../../Input/Input";

type FormInputProps = InputData;

const FormInput = ({
  labelText,
  type = "text",
  name,
  pattern,
}: FormInputProps) => {
  const inputRef = useRef(null)
  const id = useId();

  const [isValid, setIsValid] = useState(false);
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const regexp = new RegExp("^" + pattern + "$", "ig");
    const isValidValue = regexp.test(e.currentTarget.value);
    setIsValid(isValidValue);
  };
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <Input ref={inputRef} id={id} type={type} name={name} onInput={handleInput} />
    </>
  );
};

export default FormInput;

// setIsValid(regexp.test(e.target.value))

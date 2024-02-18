import Button from "../../Button/Button";
import React, { useContext } from "react";
import { SetValueContext, ValueContext } from "../Counter";

const ButtonMinus = () => {
  const setValue = useContext(SetValueContext)!;
  const value = useContext(ValueContext);

  const decrease = () => {
    setValue(value - 1);
  };
  return <Button onClick={decrease}>Minus</Button>;
};

export default ButtonMinus;

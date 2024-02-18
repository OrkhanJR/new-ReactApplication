import Button from "../../Button/Button";
import React, { useContext } from "react";
import { SetValueContext } from "../Counter";

const ButtonPlus = () => {
  const setValue = useContext(SetValueContext)!;

  const increase = () => {
    setValue((prevValue) => prevValue + 1);
  };
  
  return <Button onClick={increase}>Plus</Button>;
};

export default ButtonPlus;

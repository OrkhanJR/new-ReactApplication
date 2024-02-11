import { useState } from "react";
import Div from "../Div/Div";
import ButtonMinus from "./ButtonMinus/ButtonMinus";
import ButtonPlus from "./ButtonPlus/ButtonPlus";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <ButtonMinus setValue={setValue} />
      <Div>{value}</Div>
      <ButtonPlus setValue={setValue} />
    </>
  );
};

export default Counter;

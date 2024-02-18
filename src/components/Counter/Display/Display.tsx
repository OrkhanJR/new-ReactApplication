import React, { useContext } from "react";
import Div from "../../Div/Div";
import { ValueContext } from "../Counter";

const Display = () => {
  const info = useContext(ValueContext);

  return (
    <>
      <Div>{info}</Div>
    </>
  );
};

export default Display;

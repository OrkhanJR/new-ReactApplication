import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import ButtonMinus from "./ButtonMinus/ButtonMinus";
import ButtonPlus from "./ButtonPlus/ButtonPlus";
import Display from "./Display/Display";

const INITIAL_STATE = 0;

export const ValueContext = createContext<number>(INITIAL_STATE);
export const SetValueContext = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

const Counter = () => {
  const [value, setValue] = useState(INITIAL_STATE);

  return (
    <>
      <SetValueContext.Provider value={setValue}>
        <ValueContext.Provider value={value}>
          <ButtonMinus />
          <Display />
          <ButtonPlus />
        </ValueContext.Provider>
      </SetValueContext.Provider>
    </>
  );
};

export default Counter;

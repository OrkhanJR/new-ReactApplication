import { forwardRef } from "react";

type InputProps = {
  id: string;
  type: string;
  name: string;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input = forwardRef(
  (
    { id, type, name, onInput }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input type={type} id={id} name={name} ref={ref} onInput={onInput} />
    );
  }
);

export default Input;

import Button from "../../Button/Button";

type ButtonMinusProps = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonMinus = ({ setValue }: ButtonMinusProps) => {
  const decrease = () => {
    setValue((prevValue) => prevValue - 1);
  };
  return <Button onClick={decrease}>Minus</Button>;
};

export default ButtonMinus;

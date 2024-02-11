import Button from "../../Button/Button";

const ButtonMinus = ({setValue}) => {
  const decrease = () => {
    setValue((value) => value - 1);
  };
  return <Button onClick={decrease}>Minus</Button>;
};

export default ButtonMinus;

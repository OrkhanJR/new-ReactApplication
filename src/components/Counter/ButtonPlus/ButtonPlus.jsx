import Button from "../../Button/Button";

const ButtonPlus = ({ setValue }) => {
  const increase = () => {
    setValue((value) => value + 1);
  };
  return <Button onClick={increase}>Plus</Button>;
};

export default ButtonPlus;

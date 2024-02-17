import Button from "../../Button/Button";

type ButtonPlusProps = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonPlus = ({ setValue }: ButtonPlusProps) => {
  const increase = () => {
    setValue((prevValue) => prevValue + 1);
  };
  return <Button onClick={increase}>Plus</Button>;
};

export default ButtonPlus;

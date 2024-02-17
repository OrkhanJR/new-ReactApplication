import { Children } from "../Types/Children";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: Children;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;

import { Children } from "../Types/Children";

type LiProps = {
  children: Children;
};

const Li = ({ children }: LiProps) => {
  return <li>{children}</li>;
};

export default Li;

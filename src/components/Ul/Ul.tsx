import { Children } from "../Types/Children";

type UlProps = {
  children: Children;
};

const Ul = ({ children }: UlProps) => {
  return <ul>{children}</ul>;
};

export default Ul;

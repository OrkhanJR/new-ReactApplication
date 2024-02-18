import { Children } from "../Types/Children";

type DivProps = {
  className?: string;
  children: Children;
};

const Div = ({ className, children }: DivProps) => {
  return <div className={className}>{children}</div>;
};

export default Div;

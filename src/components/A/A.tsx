
import { Children } from "../Types/Children";

type linkProps = {
  href: string;
  children: Children;
};

const A = ({ href, children }: linkProps) => {
  return <a href={href}>{children}</a>;
};

export default A;

type ImgProps = {
  id?: string;
  src: string;
};

const Img = ({ id, src }: ImgProps) => {
  return <img id={id} src={src} />;
};

export default Img;

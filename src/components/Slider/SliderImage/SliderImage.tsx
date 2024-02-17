type SliderImageProps = {
  src: string;
};

const SliderImage = ({ src }: SliderImageProps) => {
  return (
    <>
      <img src={src} alt="" />
    </>
  );
};

export default SliderImage;

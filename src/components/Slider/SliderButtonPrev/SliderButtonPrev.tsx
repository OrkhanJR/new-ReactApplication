import { ImageDataType } from "../ImagesData/ImagesData";

type SliderButtonPrevProps = {
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  currentImageIndex: number;
  imagesData: ImageDataType[];
};

const SliderButtonPrev = ({
  setCurrentImageIndex,
  currentImageIndex,
  imagesData,
}: SliderButtonPrevProps) => {
  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imagesData.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      <button onClick={prevImage}>Prev</button>
    </>
  );
};

export default SliderButtonPrev;

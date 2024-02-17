import { ImageDataType } from "../ImagesData/ImagesData";

type SliderButtonNextTypes = {
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  currentImageIndex: number;
  imagesData: ImageDataType[];
}

const SliderButtonNext = ({
  setCurrentImageIndex,
  currentImageIndex,
  imagesData,
}: SliderButtonNextTypes) => {
  const nextImage = () => {
    if (currentImageIndex === imagesData.length - 1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  return (
    <>
      <button onClick={nextImage}>Next</button>
    </>
  );
};

export default SliderButtonNext;

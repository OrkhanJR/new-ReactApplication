import SliderButtonNext from "./SliderButtonNext/SliderButtonNext";
import SliderButtonPrev from "./SliderButtonPrev/SliderButtonPrev";
import SliderImage from "./SliderImage/SliderImage";
import ImageDescription from "./ImageDescription/ImageDescription";
import ImagesData, { ImageDataType } from "./ImagesData/ImagesData";
import { useState } from "react";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <SliderButtonPrev
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
        imagesData={ImagesData}
      />
      <SliderImage src={(ImagesData[currentImageIndex] as ImageDataType).src} />
      <ImageDescription>
        {(ImagesData[currentImageIndex] as ImageDataType).desc}
      </ImageDescription>
      <SliderButtonNext
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
        imagesData={ImagesData}
      />
    </>
  );
};

export default Slider;

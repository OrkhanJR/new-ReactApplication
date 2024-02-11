import SliderButtonNext from "./SliderButtonNext/SliderButtonNext";
import SliderButtonPrev from "./SliderButtonPrev/SliderButtonPrev";
import SliderImage from "./SliderImage/SliderImage";
import ImageDescription from "./ImageDescription/ImageDescription";
import ImagesData from "./ImagesData/ImagesData";
import { useState } from "react";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <SliderButtonPrev
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
        ImagesData={ImagesData}
      />
      <SliderImage src={ImagesData[currentImageIndex].src} />
      <ImageDescription>{ImagesData[currentImageIndex].desc}</ImageDescription>
      <SliderButtonNext
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
        ImagesData={ImagesData}
      />
    </>
  );
};

export default Slider;


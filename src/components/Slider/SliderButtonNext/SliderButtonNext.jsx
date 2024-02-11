const SliderButtonNext = ({
  setCurrentImageIndex,
  currentImageIndex,
  ImagesData,
}) => {
  const nextImage = () => {
    if (currentImageIndex === ImagesData.length - 1) {
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

const SliderButtonPrev = ({
  setCurrentImageIndex,
  currentImageIndex,
  ImagesData,
}) => {
  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(ImagesData.length - 1);
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

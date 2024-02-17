import React, { useState } from "react";
import ModalContent from "../ModalContent/ModalContent";

const NoPortalExample = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal without a portal
      </button>
      {showModal && <ModalContent onClose={() => setShowModal(false)} />}
    </>
  );
};

export default NoPortalExample;

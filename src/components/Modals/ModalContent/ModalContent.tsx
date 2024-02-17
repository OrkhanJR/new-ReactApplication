type ModalContent = {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

import styles from "../../../App.module.css"

const ModalContent = ({ onClose }: ModalContent) => {
  return (
    <div className={styles.modal}>
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalContent;

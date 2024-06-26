import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { Photo } from "../../App-types";
import { FC } from "react";

interface ImageModalProps {
  isOpen: boolean;
  image: Photo;
  onClose: () => void;
}
const ImageModal: FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "none",
        },
      }}
    >
      <img className={css.img} src={image.urls.regular} />
    </ReactModal>
  );
};
export default ImageModal;

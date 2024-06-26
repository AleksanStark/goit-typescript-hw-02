import { FC } from "react";
import { Photo } from "../../App-types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  photo: Photo;
  onOpen: (photo: Photo) => void;
}

const ImageCard: FC<ImageCardProps> = ({ photo, onOpen }) => {
  return (
    <div className={css.container}>
      <img
        className={css.image_card}
        src={photo.urls.small}
        alt={photo.description}
        onClick={() => onOpen(photo)}
      />
    </div>
  );
};
export default ImageCard;

import { FC } from "react";
import { Photo } from "../../App-types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  listPhoto: Photo[];
  onOpen: (photo: Photo) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ listPhoto, onOpen }) => {
  return (
    <ul className={css.list}>
      {listPhoto.map((photo) => (
        <li className={css.item} key={photo.id}>
          <ImageCard photo={photo} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;

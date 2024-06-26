import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoad: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoad }) => {
  return (
    <button className={css.button} onClick={onLoad}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;

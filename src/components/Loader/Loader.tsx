import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";
import { FC } from "react";
const Loader: FC = () => {
  return (
    <div className={css.container}>
      <Oval />
    </div>
  );
};
export default Loader;

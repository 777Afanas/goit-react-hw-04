import { Watch } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader({ message }) {
  return (
    <div className={css.location}>     
      <p className={css.watch}>{message}</p>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

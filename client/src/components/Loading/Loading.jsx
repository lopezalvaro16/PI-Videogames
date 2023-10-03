import React from "react";
import style from "./Loading.module.css";
import imgLoading from "../../assets/loading-62.gif.webp";

const Loading = (props) => {
  return (
    <div className={style.loading}>
      <img src={imgLoading} alt="loading" />
      {/* <br />
      <img src={imgLoading} alt="loading" />
      <br />
      <img src={imgLoading} alt="loading" />
      <br />
      <img src={imgLoading} alt="loading" /> */}
    </div>
  );
};

export default Loading;

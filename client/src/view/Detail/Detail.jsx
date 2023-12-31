import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { errorChange, messageChange } from "../../redux/actions/action";

const Detail = (props) => {
  // Estado y variables locales
  const [videoGame, setVideoGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoanding] = useState(true);

  // Estados y acciones goblales
  const { error } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Estados del ciclo de vida del componente
  useEffect(() => {
    axios
      .get(`http://localhost:3002/videogames/${id}`)
      .then(({ data }) => {
        setVideoGame(data);
        setLoanding(false);
      })
      .catch(({ message }) => {
        dispatch(errorChange(message));
        navigate("/notfound");
        setLoanding(false);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const descriptionText = videoGame.description;
  return (
    <div className={style.detail}>
      <div className={style.divContainer}>
        <Link to={"/cards"}>
          <button className={style.button}>Volver</button>
        </Link>
        {loading}
        {/* NOMBRE */}
        <h1 className={style.detailName}>{videoGame.name}</h1>
        <hr className={style.hrName}></hr>
        {/* IMAGEN */}
        <div className={style.divDetailImg}>
          <img className={style.detailImg} src={videoGame.image} />
        </div>
        {/* DESCRIPCION */}
        <div className={style.divDetail}>
          <h2 className={style.h2Detail}>Description</h2>
          <hr className={style.hrImg}></hr>
          <p
            className={style.pDetailDescription}
            dangerouslySetInnerHTML={{ __html: descriptionText }}
          />
        </div>
        {/* RELEASED */}
        <div className={style.divReleased}>
          <h2 className={style.h2Detail}>Released</h2>
          <hr className={style.hrImg}></hr>
          <p className={style.pDetailReleased}>{videoGame.released}</p>
        </div>
        {/* PLATFORMS */}
        <div className={style.divDetailPlatforms}>
          <h2 className={style.h2Detail}>Platforms</h2>
          <hr className={style.hrPlatforms}></hr>
          <div className={style.divPlatforms}>
            {videoGame.platforms?.map((item, index) => {
              return (
                <p className={style.pDetailPlatforms} key={index}>
                  {item.platform?.name}
                </p>
              );
            })}
          </div>
        </div>
        {/* GENRES */}
        <div className={style.divDetailPlatforms}>
          <h2 className={style.h2Detail}>Genres</h2>
          <hr className={style.hrPlatforms}></hr>
          <div className={style.divPlatforms}>
            {videoGame.genres?.map((item, index) => {
              return (
                <p className={style.pDetailPlatforms} key={index}>
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

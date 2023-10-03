import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getVideoGames, isLoadingChange } from "../../redux/actions/action";
import { useDispatch } from "react-redux";

const Card = (props) => {
  // Estados locales
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Funciones locales
  const openModal = (event) => {
    const { value } = event.target;
    setIsModalOpen(true);
    setMessage(`Estas seguro que quieres eliminar el video juego !"${value}"`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage("");
  };

  const deleteGame = async (event) => {
    const { value } = event.target;
    console.log(value);
    await axios.delete(`http://localhost:3002/videogames/${value}`);
    dispatch(isLoadingChange(true));
    dispatch(getVideoGames()).then((response) => {
      navigate("/home");
    });
  };

  return (
    <div className={`${style.card} ${isModalOpen && style.cardHover} `}>
      <div className={style.divBtnEliEdi}>
        <Link className={style.link} to={`/update/${props.id}`}>
          {typeof props.id === "string" && (
            <img
              className={style.imgEditar}
              src="data:image/png;base64,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"
            />
          )}
        </Link>
        {typeof props.id === "string" && (
          <button
            className={style.botonCierre}
            value={props.name}
            onClick={openModal}
          >
            <img
              className={style.eliminar}
              src="https://w7.pngwing.com/pngs/972/387/png-transparent-abort-delete-no-cancel-locked-blocked-prohibited-denied-forbidden-icon-thumbnail.png"
              alt=""
            />
          </button>
        )}
      </div>

      <div className={style.divName}>
        <Link className={style.link} to={`/detail/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
      </div>
      <div className={`${style.divImg}`}>
        <img className={`${style.imgCard}`} src={props.image} alt="videogame" />
      </div>
      <div className={style.divRating}>
        <h3>Rating: ⭐{props.rating}</h3>
      </div>
      <h4 className={style.divGenresH4}>Genres</h4>
      <div className={style.divGenres}>
        {props.genres?.map((genre) => (
          <p className={style.p} key={genre.id}>
            {genre.name}
          </p>
        ))}
      </div>
      <h4 className={style.divGenresH4}>Platforms</h4>
      <div className={style.divPlatform}>
        {props.platforms.map((item, index) => (
          <p className={style.p} key={index}>
            {item.platform?.name}
          </p>
        ))}
      </div>
      {/* Mostrar mensaje en Modal */}
      <div>
        {isModalOpen && (
          <div className={style.divModal}>
            <div className={style.divMessage}>
              <h1>{message}</h1>
              <div className={style.divBtnModal}>
                <button
                  onClick={deleteGame}
                  value={props.id}
                  className={style.button}
                >
                  Aceptar
                </button>
                <button onClick={closeModal} className={style.button}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

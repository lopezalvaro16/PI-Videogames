import React from "react";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  // Estados y variables locales
  const navigate = useNavigate();

  // Funciones locales
  const irHome = () => {
    navigate("/home");
  };
  const irLanding = () => {
    navigate("/");
  };

  const irCreateVideoGame = () => {
    navigate("/createVideoGame");
  };

  return (
    <div className={style.navBar}>
      <ul className={style.ul}>
        <li onClick={irCreateVideoGame}>
          <span>Create Game</span>
        </li>
        <li onClick={irHome}>
          <span>HOME</span>
        </li>
        <li onClick={irLanding}>
          <span>Landing</span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

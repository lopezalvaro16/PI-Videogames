import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const LandingPage = (props) => {
  // Estados y variables locales
  const navigate = useNavigate();

  // Funciones locales
  const irHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOn, setIsOn] = useState(false);

  const handleMouseEnter = () => {
    setIsOn(true);
  };

  const handleMouseLeave = () => {
    setIsOn(false);
  };

  return (
    <>
      <NavBar />
      <div className={styles.landing}>
        <div className={styles.descripcion}>
          <h1>Bienvenido!</h1>
          <p>
            Bienvenido a mi página para descubrir juegos en línea. Aquí, puedes
            explorar una amplia variedad de juegos emocionantes y obtener
            descripciones detalladas de cada uno. Desde juegos de acción hasta
            rompecabezas, tenemos algo para todos los amantes de los
            videojuegos. Prepárate para sumergirte en el mundo de los juegos y
            conocer más sobre tus títulos favoritos. ¿Listo para empezar a
            explorar?
          </p>
          <button
            className={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={irHome}
          >
            <span>{isOn ? "ON" : "OFF"}</span>
          </button>
        </div>
        <div className={styles.descripcion}>
          <img
            className={styles.imagen}
            src="https://images.unsplash.com/photo-1499551660540-eaf0697882f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;

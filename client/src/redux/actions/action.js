import {
  ERROR,
  ERROR_CHANGE,
  FILTER_BY_NAME,
  FILTER_GENRE,
  GET_GENRES,
  GET_PLATFORMS,
  GET_VIDEOGAMES,
  GET_VIDEOGAME_NAME,
  ISLOADING,
  IS_MODAL_OPEN,
  MESSAGE,
  ORDER_CARD,
  POST_VIDEOGAME,
  RESET_ERROR,
} from "../actions/action-type";
import axios from "axios";

const URL = "http://localhost:3002";

export const getVideoGames = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL + "/videogames");
      const data = await response.json();
      //console.log(data[0])
      return dispatch({
        type: GET_VIDEOGAMES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getVideoGameByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/videogames/name?name=${name}`);
      return dispatch({
        type: GET_VIDEOGAME_NAME,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.message,
      });
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/genres`);
      return dispatch({
        type: GET_GENRES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/platforms`);
      return dispatch({
        type: GET_PLATFORMS,
        payload: data,
      });
    } catch (error) {
      //console.log(error.message);
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const postVideoGame = (game) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}/videogames`, game);
      console.log(data);
      return dispatch({
        type: POST_VIDEOGAME,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
    payload: "",
  };
};

export const errorChange = (mensaje) => {
  return {
    type: ERROR_CHANGE,
    payload: mensaje,
  };
};

export const filterGenre = (genre) => {
  if (!genre) {
    return {
      type: ERROR,
      payload: "Debes seleccionar un genero",
    };
  }
  return {
    type: FILTER_GENRE,
    payload: genre,
  };
};

export const filterByName = (nameGame) => {
  if (!nameGame) {
    return {
      type: ERROR,
      payload: "Debes ingresar un parametro de busqueda",
    };
  }
  return {
    type: FILTER_BY_NAME,
    payload: nameGame,
  };
};

export const orderVideoGames = (order) => {
  if (!order) {
    return {
      type: ERROR,
      payload: "Debes seleccionar un tipo de ordenamiento",
    };
  }
  return {
    type: ORDER_CARD,
    payload: order,
  };
};

export const isLoadingChange = (boolean) => {
  return {
    type: ISLOADING,
    payload: boolean,
  };
};

export const messageChange = (mensaje) => {
  return {
    type: MESSAGE,
    payload: mensaje,
  };
};

export const isModalOpenChange = (boolean) => {
  return {
    type: IS_MODAL_OPEN,
    payload: boolean,
  };
};

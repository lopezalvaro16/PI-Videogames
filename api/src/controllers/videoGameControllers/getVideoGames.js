require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre } = require("../../db");
const { API_KEY } = process.env;

const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getVideoGames = async () => {
  // Actualizara los campos especificados en updateOnDuplicate del registro duplicado
  let videoGames = [];
  try {
    for (let i = 1; i < 6; i++) {
      const apiData = await axios.get(`${URL}&page=${i}`);
      let pageGames = apiData.data.results.map((game) => {
        return {
          id: game.id,
          name: game.name,
          description: game.description,
          platforms: game.platforms,
          image: game.background_image,
          released: game.released,
          rating: game.rating,
          genres: game.genres,
        };
      });
      pageGames.length && videoGames.push(...pageGames);
    }
  } catch (error) {
    console.log(error.message);
  }
  const videoGamesBD = await Videogame.findAll({ include: [Genre] });
  videoGames.push(...videoGamesBD);
  //console.log(videoGames.length);
  return videoGames;
};

module.exports = getVideoGames;

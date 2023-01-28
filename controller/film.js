import FilmModel from "../model/film.js";

export const getFilms = async (req, res) => {
  try {
    const films = await FilmModel.find();
    res.json(films);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneFilm = async (req, res) => {
  try {
    const film = await FilmModel.findById(req.params.id);
    res.json(film);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

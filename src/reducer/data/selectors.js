import NameSpace from "../name-space.js";
import {getGenre} from "../films/selectors.js";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

const getAllFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getPreviewFilm = (state) => {
  return state[NAME_SPACE].previewFilm;
};

export const getFilmsList = createSelector(
    getAllFilms,
    getGenre,
    (resultOne, resultTwo) => {
      if (resultTwo === `All genres`) {
        return resultOne;
      }
      return resultOne.filter((film) => film.genre === resultTwo);
    }
);

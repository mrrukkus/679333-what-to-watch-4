import NameSpace from "../name-space.js";
import {getGenre} from "../films/selectors.js";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

const getAllFilms = (state) => {
  return state[NAME_SPACE].films.slice(0, getFilms(state).length - 1);
};

export const getPreviewFilm = (state) => {
  return getFilms(state)[getFilms(state).length - 1];
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

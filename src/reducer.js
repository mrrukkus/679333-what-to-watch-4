import films from "./mocks/films.js";
import {extend} from "./utils.js";

const initialState = {
  genre: `Drama`,
  films
};

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  GET_FILMS_FILTERED_BY_GENRE: `GET_FILMS_FILTERED_BY_GENRE`
};

const getFilteredFilmsList = (genre, filmsList) => {
  if (genre !== `All genres`) {
    return filmsList.filter((film) => film.genre === genre);
  }

  return filmsList;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_CHANGE:
      return extend(state, {
        genre: action.genre
      });

    case ActionType.GET_FILMS_FILTERED_BY_GENRE:
      return extend(state, {
        films: action.films
      });
  }

  return state;
};

export {reducer, getFilteredFilmsList, ActionType};

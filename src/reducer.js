import films from "./mocks/films.js";
import {extend} from "./utils.js";

const initialState = {
  genre: `All genres`,
  filmIdToRenderDetails: -1,
  films
};

const getFilteredFilmsList = (genre, filmsList) => {
  if (genre !== `All genres`) {
    return filmsList.filter((film) => film.genre === genre);
  }

  return filmsList;
};

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  GET_FILMS_FILTERED_BY_GENRE: `GET_FILMS_FILTERED_BY_GENRE`,
  SHOW_DETAILS: `SHOW_DETAILS`
};

const ActionCreator = {
  filterChange: (genreType) => ({
    type: ActionType.FILTER_CHANGE,
    genre: genreType,
  }),

  getFilmsFilteredByGenre: (genre, movies) => ({
    type: ActionType.GET_FILMS_FILTERED_BY_GENRE,
    films: getFilteredFilmsList(genre, movies)
  }),

  showDetails: (id) => ({
    type: ActionType.SHOW_DETAILS,
    filmIdToRenderDetails: id
  }),
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
    case ActionType.SHOW_DETAILS:
      return extend(state, {
        filmIdToRenderDetails: action.filmIdToRenderDetails
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

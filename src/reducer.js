import films from "./mocks/films.js";
import {extend, DEFAULT_CARDS_COUNT, MORE_LIKE_THIS_CARDS_COUNT} from "./utils.js";

const initialState = {
  genre: `All genres`,
  filmToRenderDetails: null,
  currentFilmsCardsCount: DEFAULT_CARDS_COUNT,
  films
};

const getFilteredFilmsList = (genre, filmsList) => {
  if (genre !== `All genres`) {
    return filmsList.filter((film) => film.genre === genre);
  }

  return filmsList;
};

const calculateNewCardsCount = (currentCardsCount, increaser, filmsCount) => {
  let newCardsCount = currentCardsCount + increaser;

  if (filmsCount < newCardsCount) {
    newCardsCount = currentCardsCount + (filmsCount - currentCardsCount);

    return newCardsCount;
  }

  return newCardsCount;
};

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  SHOW_DETAILS: `SHOW_DETAILS`,
  CHANGE_CARDS_COUNT: `CHANGE_CARDS_COUNT`
};

const ActionCreator = {
  filterChange: (genreType) => ({
    type: ActionType.FILTER_CHANGE,
    genre: genreType,
  }),

  showDetails: (film) => ({
    type: ActionType.SHOW_DETAILS,
    filmToRenderDetails: film
  }),

  changeCardsCount: (count) => ({
    type: ActionType.CHANGE_CARDS_COUNT,
    currentFilmsCardsCount: count
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_CHANGE:
      return extend(state, {
        genre: action.genre
      });
    case ActionType.SHOW_DETAILS:
      return extend(state, {
        filmToRenderDetails: action.filmToRenderDetails,
        currentFilmsCardsCount: MORE_LIKE_THIS_CARDS_COUNT
      });
    case ActionType.CHANGE_CARDS_COUNT:
      return extend(state, {
        currentFilmsCardsCount: action.currentFilmsCardsCount
      });
  }

  return state;
};

export {reducer, calculateNewCardsCount, getFilteredFilmsList, ActionType, ActionCreator};

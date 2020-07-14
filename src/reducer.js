import films from "./mocks/films.js";
import {extend} from "./utils.js";

const initialState = {
  genre: `All genres`,
  filmToRenderDetails: null,
  films
};

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  SHOW_DETAILS: `SHOW_DETAILS`
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_CHANGE:
      return extend(state, {
        genre: action.genre
      });
    case ActionType.SHOW_DETAILS:
      return extend(state, {
        filmToRenderDetails: action.filmToRenderDetails
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

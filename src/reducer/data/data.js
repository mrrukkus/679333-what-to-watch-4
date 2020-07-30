import {extend} from "../../utils.js";
import createFilm from "../../adapters/films.js";

const returnAdaptedFilms = (films) => {
  return films.map((film) => createFilm(film));
};

const initialState = {
  films: [],
  previewFilm: {}
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`
};

const ActionCreator = {
  loadFilms: (movies) => {
    return {
      type: ActionType.LOAD_FILMS,
      films: returnAdaptedFilms(movies)
    };
  },

  loadPromo: (film) => {
    return {
      type: ActionType.LOAD_PROMO,
      previewFilm: createFilm(film)
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.films
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        previewFilm: action.previewFilm
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};

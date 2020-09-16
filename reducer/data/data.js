import {extend} from "../../utils.js";
import createFilm from "../../adapters/films.tsx";

const returnAdaptedFilms = (films) => {
  return films.map((film) => createFilm(film));
};

const getUpdatedFilmsList = (currentList, film) => {
  return currentList.map((currentFilm) => {
    if (currentFilm === film) {
      return extend(currentFilm, {
        isFavorite: !currentFilm.isFavorite,
      });
    }

    return currentFilm;
  });
};

const initialState = {
  films: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
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
  },

  loadFavorites: (movies) => {
    return {
      type: ActionType.LOAD_FAVORITES,
      films: returnAdaptedFilms(movies),
    };
  },

  changeFavoriteStatus: (film) => {
    return {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      changedFilm: film
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
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },
  postFavorite: (film) => (dispatch, getState, api) => {
    const status = +!film.isFavorite;
    return api.post(`/favorite/${film.id}/${status}`, {
      film
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.films.concat(state.films)
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        films: state.films.concat(action.previewFilm)
      });
    case ActionType.CHANGE_FAVORITE_STATUS:
      return extend(state, {
        films: getUpdatedFilmsList(state.films, action.changedFilm)
      });
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favoriteFilms: action.films
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};

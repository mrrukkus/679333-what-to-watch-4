import {extend, DEFAULT_CARDS_COUNT, MORE_LIKE_THIS_CARDS_COUNT} from "../../utils.js";

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

const initialState = {
  genre: `All genres`,
  filmToRenderDetails: -1,
  filmToPlay: null,
  currentFilmsCardsCount: DEFAULT_CARDS_COUNT,
  postCommentStatus: null,
};

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  SHOW_DETAILS: `SHOW_DETAILS`,
  CHANGE_CARDS_COUNT: `CHANGE_CARDS_COUNT`,
  PLAY_FILM: `PLAY_FILM`,
  EXIT_FILM: `EXIT_FILM`,
  POST_COMMENT: `POST_COMMENT`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  GET_CHANGED_IN_LIST_FILM: `GET_CHANGED_IN_LIST_FILM`
};

const ActionCreator = {
  filterChange: (genreType) => ({
    type: ActionType.FILTER_CHANGE,
    genre: genreType,
  }),

  showDetails: (index) => ({
    type: ActionType.SHOW_DETAILS,
    filmToRenderDetails: index
  }),

  changeCardsCount: (count) => ({
    type: ActionType.CHANGE_CARDS_COUNT,
    currentFilmsCardsCount: count
  }),

  playFilm: (film) => ({
    type: ActionType.PLAY_FILM,
    filmToPlay: film
  }),

  postComment: (status) => ({
    type: ActionType.POST_COMMENT,
    postCommentStatus: status
  }),
};

const Operation = {
  postComment: (commentData) => (dispatch, getState, api) => {
    return api.post(`/comments/${commentData.id}`, {
      "rating": commentData.rating,
      "comment": commentData.comment,
    })
      .then((response) => {
        dispatch(ActionCreator.postComment(response.status));
        commentData.target.disabled = false;

        if (response.status === 200) {
          commentData.history.go(-1);
        } else {
          commentData.history.push(`/error`);
        }
      });
  },
  getComments: (film) => (dispatch, getState, api) => {
    return api.get(`/comments/${film.id}`)
      .then((response) => {
        film.comments = response.data;
      });
  },
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
    case ActionType.PLAY_FILM:
      return extend(state, {
        filmToPlay: action.filmToPlay,
      });
    case ActionType.POST_COMMENT:
      return extend(state, {
        postCommentStatus: action.postCommentStatus
      });
    case ActionType.GET_CHANGED_IN_LIST_FILM:
      return extend(state, {
        filmToRenderDetails: action.changedFilm
      });
  }
  return state;
};

export {reducer, calculateNewCardsCount, getFilteredFilmsList, ActionType, ActionCreator, Operation};

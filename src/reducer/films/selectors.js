import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.FILMS;

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getFilmToRenderDetails = (state) => {
  return state[NAME_SPACE].filmToRenderDetails;
};

export const getFilmToPlay = (state) => {
  return state[NAME_SPACE].filmToPlay;
};

export const getCurrentFilmsCardsCount = (state) => {
  return state[NAME_SPACE].currentFilmsCardsCount;
};


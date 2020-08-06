import {reducer, ActionType, ActionCreator} from "./films.js";

it(`Reducer should return default state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    filmToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    filmToPlay: null,
    postCommentStatus: null,
  });
});

it(`Reducer should return state with new genre`, () => {
  expect(reducer(void 0, {
    type: ActionType.FILTER_CHANGE,
    genre: `Drama`
  })).toEqual({
    genre: `Drama`,
    filmToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    filmToPlay: null,
    postCommentStatus: null,
  });
});

it(`Reducer should return state with default genre and new film details`, () => {
  expect(reducer(void 0, {
    type: ActionType.SHOW_DETAILS,
    filmToRenderDetails: 0,
  })).toEqual({
    genre: `All genres`,
    filmToRenderDetails: 0,
    currentFilmsCardsCount: 4,
    filmToPlay: null,
    postCommentStatus: null,
  });
});

it(`Reducer should return state with new genre and film`, () => {
  expect(reducer({
    genre: `Drama`
  }, {
    type: ActionType.SHOW_DETAILS,
    filmToRenderDetails: 0
  })).toEqual({
    genre: `Drama`,
    filmToRenderDetails: 0,
    currentFilmsCardsCount: 4
  });
});

describe(`Action creators works correctly`, () => {
  it(`Action creator for change genre returns correct genre`, () => {
    expect(ActionCreator.filterChange(`Drama`)).toEqual({
      type: ActionType.FILTER_CHANGE,
      genre: `Drama`
    });
  });

  it(`Action creator for closing film player returns null for filmToPlay`, () => {
    expect(ActionCreator.exitFilm()).toEqual({
      type: ActionType.EXIT_FILM,
      filmToPlay: null,
    });
  });

  it(`Action creator changes cards count correctly`, () => {
    expect(ActionCreator.changeCardsCount(15)).toEqual({
      type: ActionType.CHANGE_CARDS_COUNT,
      currentFilmsCardsCount: 15
    });
  });
});

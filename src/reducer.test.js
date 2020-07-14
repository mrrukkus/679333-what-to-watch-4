import films from "./mocks/films.js";
import {reducer, ActionType} from "./reducer.js";

it(`Reducer should return default state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    filmToRenderDetails: null,
    films
  });
});

it(`Reducer should return state with new genre`, () => {
  expect(reducer(void 0, {
    type: ActionType.FILTER_CHANGE,
    genre: `Drama`
  })).toEqual({
    genre: `Drama`,
    filmToRenderDetails: null,
    films
  });
});

it(`Reducer should return state with default genre and new film details`, () => {
  expect(reducer(void 0, {
    type: ActionType.SHOW_DETAILS,
    filmToRenderDetails: films[0]
  })).toEqual({
    genre: `All genres`,
    filmToRenderDetails: films[0],
    films
  });
});

it(`Reducer should return state with new genre and film`, () => {
  expect(reducer({
    genre: `Drama`
  }, {
    type: ActionType.SHOW_DETAILS,
    filmToRenderDetails: films[0]
  })).toEqual({
    genre: `Drama`,
    filmToRenderDetails: films[0],
  });
});

import films from "./mocks/films.js";
import {reducer, ActionType} from "./reducer.js";

it(`Reducer should return default state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `Drama`,
    films
  });
});

it(`Reducer should return state with new genre`, () => {
  expect(reducer(void 0, {
    type: ActionType.FILTER_CHANGE,
    genre: `All genres`
  })).toEqual({
    genre: `All genres`,
    films
  });
});

it(`Reducer should return state with default genre and new film`, () => {
  expect(reducer(void 0, {
    type: ActionType.GET_FILMS_FILTERED_BY_GENRE,
    films: films[0]
  })).toEqual({
    genre: `Drama`,
    films: films[0]
  });
});

it(`Reducer should return state with new genre and film`, () => {
  expect(reducer({
    genre: `All genres`
  }, {
    type: ActionType.GET_FILMS_FILTERED_BY_GENRE,
    films: films[0]
  })).toEqual({
    genre: `All genres`,
    films: films[0]
  });
});

import {reducer, ActionType, ActionCreator} from "./films.js";

const filmsMock = [
  {
    runTime: 88,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `1,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    runTime: 88,
    img: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
    genre: `Dramas`,
    year: 2014,
    filmBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    score: `2,0`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
];

it(`Reducer should return default state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    filmToRenderDetails: null,
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
    filmToRenderDetails: null,
    currentFilmsCardsCount: 8,
    filmToPlay: null,
    postCommentStatus: null,
  });
});

it(`Reducer should return state with default genre and new film details`, () => {
  expect(reducer(void 0, {
    type: ActionType.SHOW_DETAILS,
    filmToRenderDetails: filmsMock[0],
  })).toEqual({
    genre: `All genres`,
    filmToRenderDetails: filmsMock[0],
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
    filmToRenderDetails: filmsMock[0]
  })).toEqual({
    genre: `Drama`,
    filmToRenderDetails: filmsMock[0],
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

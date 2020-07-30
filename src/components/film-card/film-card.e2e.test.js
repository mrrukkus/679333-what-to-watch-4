import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../main/main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

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
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 0
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
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 1
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const store = mockStore({
  "DATA": {
    films: filmsMock,
    previewFilm: filmsMock[0]
  },
  "FILMS": {
    genre: `All genres`,
    filmToRenderDetails: null,
    filmToPlay: null,
    currentFilmsCardsCount: 8,
  },
  "USER": {
    authorizationStatus: `AUTH`,
  },
});

describe(`Film card test`, () => {
  it(`Film Title mouseover check`, () => {
    const onTitleAndImageAction = jest.fn();

    const mainTemplate = mount(
        <Provider store={store}>
          <Main
            authorizationStatus={`AUTH`}
            previewFilm={filmsMock[1]}
            genre={`All genres`}
            currentFilmsCardsCount={8}
            nextFilmsCardsCount={16}
            onGenreClick={() => {}}
            onImageAndTitleClick={onTitleAndImageAction}
            onShowMoreClick={() => {}}
            onPlayClick={() => {}}
          />
        </Provider>
    );

    const movieCardsImages = mainTemplate.find(`small-movie-card__image`);
    const movieCardsTitles = mainTemplate.find(`small-movie-card__title`);


    movieCardsImages.map((image) => {
      image.simulate(`click`, {preventDefault() {}});
    });

    movieCardsTitles.map((title) => {
      title.simulate(`click`, {preventDefault() {}});
    });

    expect(onTitleAndImageAction.mock.calls.length).toBe(movieCardsImages.length + movieCardsTitles.length);
  });
});

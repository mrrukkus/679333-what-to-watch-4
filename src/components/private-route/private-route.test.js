import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {StaticRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "./private-route.jsx";

const filmsMock = [
  {
    runTime: `1h 39m`,
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
    runTime: `1h 39m`,
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
  {
    runTime: `1h 39m`,
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
    runTime: `1h 39m`,
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
    runTime: `1h 39m`,
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
    runTime: `1h 39m`,
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
    runTime: `1h 39m`,
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
    runTime: `1h 39m`,
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
    runTime: `1h 39m`,
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
];

const mockStore = configureStore([]);

it(`Private component renders correctly`, () => {
  const store = mockStore({
    "DATA": {
      films: filmsMock,
      favoriteFilms: filmsMock
    },
    "FILMS": {
      genre: `All genres`,
      filmToRenderDetails: 0,
      filmToPlay: null,
      currentFilmsCardsCount: 8,
    },
    "USER": {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });

  const privateComponent = renderer
    .create(
        <StaticRouter>
          <Provider store={store}>
            <PrivateRoute
              exact path="/mylist"
              authorizationStatus={AuthorizationStatus.AUTH}
              render={() => {
                return (
                  <MyList/>
                );
              }}
            />
          </Provider>
        </StaticRouter>
    ).toJSON();

  expect(privateComponent).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import FilmDetails from "./film-details.jsx";
import films from "../../mocks/films.js";

const mockStore = configureStore([]);

it(`Details renders correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    filmIdToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    films
  });

  const details = renderer
    .create(
        <Provider store={store}>
          <FilmDetails
            film={films[1]}
            filmsList={films.slice(0, 4)}
            onImageAndTitleClick={() => {}}
            onShowMoreClick={() => {}}
            onGenreClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(details).toMatchSnapshot();
});


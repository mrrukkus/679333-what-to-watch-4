import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";
import films from "../../mocks/films.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);


it(`Genres List renders correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    filmIdToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    films
  });

  const genresList = renderer
    .create(
        <Provider store={store}>
          <GenresList
            genre={`All genres`}
            onGenreClick={() => {}}
            onGenreAction={() => {}}
            onShowMoreClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(genresList).toMatchSnapshot();
});

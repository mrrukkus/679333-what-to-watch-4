import React from "react";
import renderer from "react-test-renderer";
import films from "../../mocks/films.js";
import {FilmsListOnMain} from "../films-list/films-list.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";


const mockStore = configureStore([]);

it(`Films list renders correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    filmIdToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    films
  });

  const list = renderer
    .create(
        <Provider store={store}>
          <FilmsListOnMain
            filmsList={films.slice(0, 8)}
            onImageAndTitleClick={() => {}}
            onShowMoreClick={() => {}}
            onGenreClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(list).toMatchSnapshot();
});

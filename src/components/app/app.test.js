import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "../app/app";
import films from "../../mocks/films.js";

const mockStore = configureStore([]);

it(`App renders correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    filmIdToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    films
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            onImageAndTitleClick={() => {}}
            onGenreClick={() => {}}
            onShowMoreClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

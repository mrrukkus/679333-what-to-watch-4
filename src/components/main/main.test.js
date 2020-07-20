import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import films from "../../mocks/films.js";

const mockStore = configureStore([]);

it(`Main renders correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    filmIdToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    films
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            genre={`All genres`}
            currentFilmsCardsCount={8}
            nextFilmsCardsCount={16}
            onGenreClick={() => {}}
            onImageAndTitleClick={() => {}}
            onShowMoreClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

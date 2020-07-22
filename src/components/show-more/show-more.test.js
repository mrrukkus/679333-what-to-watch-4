import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import films from "../../mocks/films.js";

const mockStore = configureStore([]);

it(`Show more button renders correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    filmIdToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    films
  });

  const showMoreButton = renderer
    .create(
        <Provider store={store}>
          <ShowMore
            nextFilmsCardsCount={16}
            onShowMoreClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(showMoreButton).toMatchSnapshot();
});

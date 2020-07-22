import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import films from "../../mocks/films.js";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter()
});

it(`Genre buttons click check`, () => {
  const store = mockStore({
    genre: `All genres`,
    filmIdToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    films
  });

  const clickAction = jest.fn();

  const genresListTemplate = mount(
      <Provider store={store}>
        <GenresList
          genre={`All genres`}
          onGenreClick={clickAction}
          onShowMoreClick={() => {}}
        />
      </Provider>
  );

  const genreButtons = genresListTemplate.find(`a.catalog__genres-link`);

  genreButtons.map((button) => {
    button.simulate(`click`, {preventDefault() {}});
  });

  expect(clickAction.mock.calls.length).toBe(genreButtons.length);
});

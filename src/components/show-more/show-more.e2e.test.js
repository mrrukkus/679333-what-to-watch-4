import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from "./show-more.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import films from "../../mocks/films.js";


const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Show more button should be pressed`, () => {
  const store = mockStore({
    genre: `All genres`,
    filmIdToRenderDetails: -1,
    currentFilmsCardsCount: 8,
    films
  });

  const onButtonAction = jest.fn();

  const showMoreButtonTemplate = mount(
      <Provider store={store}>
        <ShowMore
          onShowMoreClick={onButtonAction}
          currentFilmsCardsCount={8}
          filmsListCount={20}
          nextFilmsCardsCount={16}
        />
      </Provider>
  );

  const button = showMoreButtonTemplate.find(`button.catalog__button`);

  button.simulate(`click`, {preventDefault() {}});

  expect(onButtonAction.mock.calls.length).toBe(1);
});

import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../main/main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import films from "../../mocks/films.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Main component`, () => {
  it(`Film Title should be pressed`, () => {
    const onTitleAction = jest.fn();

    const store = mockStore({
      genre: `All genres`,
      filmIdToRenderDetails: -1,
      currentFilmsCardsCount: 8,
      films
    });

    const mainTemplate = mount(
        <Provider store={store}>
          <Main
            previewFilm={films[1]}
            genre={`All genres`}
            currentFilmsCardsCount={8}
            nextFilmsCardsCount={16}
            onGenreClick={() => {}}
            onImageAndTitleClick={onTitleAction}
            onShowMoreClick={() => {}}
            onPlayClick={() => {}}
          />
        </Provider>
    );

    const titleButtons = mainTemplate.find(`a.small-movie-card__link`);

    titleButtons.map((button) => {
      button.simulate(`click`, {preventDefault() {}});
    });

    expect(onTitleAction.mock.calls.length).toBe(titleButtons.length * 2);
  });
});

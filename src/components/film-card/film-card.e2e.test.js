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

const store = mockStore({
  genre: `All genres`,
  filmIdToRenderDetails: -1,
  currentFilmsCardsCount: 8,
  films
});

describe(`Film card test`, () => {
  it(`Film Title mouseover check`, () => {
    const onTitleAndImageAction = jest.fn();

    const mainTemplate = mount(
        <Provider store={store}>
          <Main
            genre={`All genres`}
            currentFilmsCardsCount={8}
            nextFilmsCardsCount={16}
            onGenreClick={() => {}}
            onImageAndTitleClick={onTitleAndImageAction}
            onShowMoreClick={() => {}}
          />
        </Provider>
    );

    const movieCardsImages = mainTemplate.find(`small-movie-card__image`);
    const movieCardsTitles = mainTemplate.find(`small-movie-card__title`);


    movieCardsImages.map((image) => {
      image.simulate(`click`, {preventDefault() {}});
    });

    movieCardsTitles.map((title) => {
      title.simulate(`click`, {preventDefault() {}});
    });

    expect(onTitleAndImageAction.mock.calls.length).toBe(movieCardsImages.length + movieCardsTitles.length);
  });
});

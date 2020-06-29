import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../main/main";
import films from "../../mocks/films.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Film card test`, () => {
  it(`Film Title mouseover check`, () => {
    const onCardAction = jest.fn();
    const onTitleAndImageAction = jest.fn();

    const mainTemplate = mount(
        <Main
          filmsList={films}
          onCardAction={onCardAction}
          onImageAndTitleClick={onTitleAndImageAction}
        />
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
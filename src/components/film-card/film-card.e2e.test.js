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
    const onTitleAction = jest.fn();

    const mainTemplate = mount(
        <Main
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          year={2014}
          filmsList={films}
          onCardAction={onTitleAction}
        />
    );

    const movieCards = mainTemplate.find(`article.small-movie-card`);

    movieCards.map((card) => {
      card.simulate(`mouseover`, {preventDefault() {}});
    });

    expect(onTitleAction.mock.calls.length).toBe(movieCards.length);
  });
});



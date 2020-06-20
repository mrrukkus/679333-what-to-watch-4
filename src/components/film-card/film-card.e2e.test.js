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
          onTitleAction={onTitleAction}
        />
    );

    const titleButtons = mainTemplate.find(`a.small-movie-card__link`);

    titleButtons.map((button) => {
      button.simulate(`mouseover`, {preventDefault() {}});
    });

    expect(onTitleAction.mock.calls.length).toBe(titleButtons.length);
  });
});



import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../main/main";
import films from "../../mocks/films.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component`, () => {
  it(`Film Title should be pressed`, () => {
    const onTitleAction = jest.fn();

    const mainTemplate = mount(
        <Main
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          year={2014}
          filmsList={films}
          onCardAction={onTitleAction}
          openDetailsHandler={() => {}}
        />
    );

    const titleButtons = mainTemplate.find(`a.small-movie-card__link`);

    titleButtons.map((button) => {
      button.simulate(`click`, {preventDefault() {}});
    });

    expect(onTitleAction.mock.calls.length).toBe(titleButtons.length);
  });
});

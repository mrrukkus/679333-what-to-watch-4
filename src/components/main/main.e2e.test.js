import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../main/main";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component`, () => {
  it(`Film Title should be pressed`, () => {
    const onTitleClick = jest.fn();

    const mainTemplate = mount(
        <Main
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          year={2014}
          filmsTitles={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
          onTitleClick={onTitleClick}
        />
    );

    const titleButtons = mainTemplate.find(`a.small-movie-card__link`);

    titleButtons.map((button) => {
      button.simulate(`click`, {preventDefault() {}});
    });

    expect(onTitleClick.mock.calls.length).toBe(titleButtons.length);
  });
});

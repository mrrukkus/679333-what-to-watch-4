import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import films from "../../mocks/films.js";
import Tabs from "../tabs/tabs.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Tabs component`, () => {
  it(`Tabs should be clicked`, () => {
    const onTabAction = jest.fn();

    const tabsTemplate = mount(
        <Tabs
          defaultOpenedTab={`Overview`}
          film={films[1]}
          onTabAction={onTabAction}
        />
    );

    const tabs = tabsTemplate.find(`a.movie-nav__link`);

    tabs.map((tab) => {
      tab.simulate(`click`, {preventDefault() {}});
    });

    expect(onTabAction.mock.calls.length).toBe(3);
  });
});


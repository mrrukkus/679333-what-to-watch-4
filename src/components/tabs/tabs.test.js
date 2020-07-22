import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import films from "../../mocks/films.js";

describe(`Tabs renders correctly`, () => {
  it(`Overview tab renders correctly`, () => {
    const overview = renderer
      .create(<Tabs
        activeTab={`Overview`}
        film={films[1]}
        onTabChange={() => {}}
      />).toJSON();

    expect(overview).toMatchSnapshot();
  });

  it(`Details tab renders correctly`, () => {
    const details = renderer
      .create(<Tabs
        activeTab={`Details`}
        film={films[1]}
        onTabChange={() => {}}
      />).toJSON();

    expect(details).toMatchSnapshot();
  });

  it(`Reviews tab renders correctly`, () => {
    const reviews = renderer
      .create(<Tabs
        activeTab={`Reviews`}
        film={films[1]}
        onTabChange={() => {}}
      />).toJSON();

    expect(reviews).toMatchSnapshot();
  });
});

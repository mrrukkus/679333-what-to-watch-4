import React from "react";
import renderer from "react-test-renderer";
import Tabs from "../tabs/tabs.jsx";
import films from "../../mocks/films.js";

describe(`Tabs renders correctly`, () => {
  it(`Overview tab renders correctly`, () => {
    const overview = renderer
      .create(<Tabs
        defaultOpenedTab={`Overview`}
        film={films[1]}
        onTabAction={() => {}}
      />).toJSON();

    expect(overview).toMatchSnapshot();
  });

  it(`Details tab renders correctly`, () => {
    const details = renderer
      .create(<Tabs
        defaultOpenedTab={`Details`}
        film={films[1]}
        onTabAction={() => {}}
      />).toJSON();

    expect(details).toMatchSnapshot();
  });

  it(`Reviews tab renders correctly`, () => {
    const reviews = renderer
      .create(<Tabs
        defaultOpenedTab={`Reviews`}
        film={films[1]}
        onTabAction={() => {}}
      />).toJSON();

    expect(reviews).toMatchSnapshot();
  });
});

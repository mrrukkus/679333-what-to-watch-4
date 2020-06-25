import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main";
import films from "../../mocks/films.js";

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      filmsList={films}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

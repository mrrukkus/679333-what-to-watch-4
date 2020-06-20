import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main";
import films from "../../mocks/films.js";

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      title={`The Grand Budapest Hotel`}
      genre={`Drama`}
      year={2014}
      filmsList={films}
      onCardAction={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

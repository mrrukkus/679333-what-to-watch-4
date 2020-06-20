import React from "react";
import renderer from "react-test-renderer";
import App from "../app/app";
import films from "../../mocks/films.js";

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      title={`The Grand Budapest Hotel`}
      genre={`Drama`}
      year={2014}
      filmsList={films}
      onTitleAction={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

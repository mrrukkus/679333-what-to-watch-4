import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main";
import films from "../../mocks/films.js";

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      onGenreClick={() => {}}
      genre={`All genres`}
      filmsList={films}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

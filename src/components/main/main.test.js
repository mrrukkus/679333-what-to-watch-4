import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main";
import films from "../../mocks/films.js";

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      filmPromo={films.defaultFilm}
      filmsList={films.filmsForCards}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

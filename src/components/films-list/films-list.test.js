import React from "react";
import renderer from "react-test-renderer";
import films from "../../mocks/films.js";
import FilmsList from "../films-list/films-list.jsx";

it(`Films list renders correctly`, () => {
  const list = renderer
    .create(<FilmsList
      genre={`All genres`}
      filmsList={films.slice(0, 8)}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
    />).toJSON();

  expect(list).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import films from "../../mocks/films.js";
import FilmsList from "../films-list/films-list.jsx";

it(`Films list renders correctly`, () => {
  const list = renderer
    .create(<FilmsList
      filmsList={films.filmsForCards}
      onCardAction={() => {}}
      openDetailsHandler={() => {}}
    />).toJSON();

  expect(list).toMatchSnapshot();
});

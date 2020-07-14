import React from "react";
import renderer from "react-test-renderer";
import FilmDetails from "./film-details.jsx";
import films from "../../mocks/films.js";


it(`Details renders correctly`, () => {
  const details = renderer
    .create(<FilmDetails
      film={films[1]}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
      filmsList={films.slice(0, 4)}
    />).toJSON();

  expect(details).toMatchSnapshot();
});


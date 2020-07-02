import React from "react";
import renderer from "react-test-renderer";
import FilmDetails from "../film-details/film-details.jsx";
import films from "../../mocks/films.js";


it(`Details renders correctly`, () => {
  const details = renderer
    .create(<FilmDetails
      film={films[1]}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
      filmsList={films}
    />).toJSON();

  expect(details).toMatchSnapshot();
});


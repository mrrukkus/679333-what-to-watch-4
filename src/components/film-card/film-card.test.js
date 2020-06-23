import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "../film-card/film-card.jsx";

it(`Film cards renders correctly`, () => {
  const card = renderer
    .create(<FilmCard
      filmTitle={`Fantastic Beasts: The Crimes of Grindelwald`}
      filmImageLink={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
    />).toJSON();

  expect(card).toMatchSnapshot();
});

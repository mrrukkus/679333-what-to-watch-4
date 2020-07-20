import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";

it(`Genres List renders correctly`, () => {
  const genresList = renderer
    .create(<GenresList
      genre={`All genres`}
      onGenreClick={() => {}}
      onGenreAction={() => {}}
      onShowMoreClick={() => {}}
    />).toJSON();

  expect(genresList).toMatchSnapshot();
});

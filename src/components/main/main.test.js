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
      onShowMoreClick={() => {}}
      currentFilmsCardsCount={8}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main";
import films from "../../mocks/films.js";

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      onGenreClick={() => {}}
      genre={`All genres`}
      filmsList={films.slice(0, 8)}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
      onShowMoreClick={() => {}}
      currentFilmsCardsCount={8}
      nextFilmsCardsCount={16}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

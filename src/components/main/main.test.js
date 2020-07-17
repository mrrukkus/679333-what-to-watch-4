import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main";
import films from "../../mocks/films.js";

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      genre={`All genres`}
      filmsList={films.slice(0, 8)}
      currentFilmsCardsCount={8}
      nextFilmsCardsCount={16}
      onGenreClick={() => {}}
      onCardAction={() => {}}
      onImageAndTitleClick={() => {}}
      onShowMoreClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

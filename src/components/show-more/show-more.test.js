import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more.jsx";

it(`Show more button renders correctly`, () => {
  const showMoreButton = renderer
    .create(<ShowMore
      onShowMoreClick={() => {}}
      nextFilmsCardsCount={16}
    />).toJSON();

  expect(showMoreButton).toMatchSnapshot();
});

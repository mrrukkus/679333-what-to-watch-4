import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from "./show-more.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Show more button should be pressed`, () => {
  const onButtonAction = jest.fn();

  const showMoreButtonTemplate = mount(
      <ShowMore
        onShowMoreClick={onButtonAction}
        currentFilmsCardsCount={8}
        filmsListCount={20}
      />
  );

  const button = showMoreButtonTemplate.find(`button.catalog__button`);

  button.simulate(`click`, {preventDefault() {}});

  expect(onButtonAction.mock.calls.length).toBe(1);
});

import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Genre buttons click check`, () => {
  const clickAction = jest.fn();

  const genresListTemplate = mount(
      <GenresList
        genre={`All genres`}
        onGenreClick={() => {}}
        onGenreAction={clickAction}
      />
  );

  const genreButtons = genresListTemplate.find(`a.catalog__genres-link`);

  genreButtons.map((button) => {
    button.simulate(`click`, {preventDefault() {}});
  });

  expect(clickAction.mock.calls.length).toBe(genreButtons.length);
});

import React from "react";
import renderer from "react-test-renderer";
import {StaticRouter} from "react-router-dom";
import FilmCard from "./film-card.jsx";

it(`Film card renders correctly`, () => {
  const card = renderer
    .create(
        <StaticRouter>
          <FilmCard
            film={{
              img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
              title: `Fantastic Beasts: The Crimes of Grindelwald`
            }}
            id={1}
            isMouseOvered={false}
            onCardMouseOver={() => {}}
            onCardMouseOut={() => {}}
            onCardClick={() => {}}
          />
        </StaticRouter>
    ).toJSON();

  expect(card).toMatchSnapshot();
});

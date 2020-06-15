import React from "react";
import renderer from "react-test-renderer";
import App from "../app/app";

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App title={`The Grand Budapest Hotel`} genre={`Drama`} year={2014} filmsTitles={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]} onTitleClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

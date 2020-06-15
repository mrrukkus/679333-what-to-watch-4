import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main";

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main title={`The Grand Budapest Hotel`} genre={`Drama`} year={2014} filmsTitles={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]} onTitleClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

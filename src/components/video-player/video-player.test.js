import React, {createRef} from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "../video-player/video-player.jsx";

it(`Video-player renders correctly`, () => {
  const player = renderer
    .create(<VideoPlayer
      videoRef={createRef()}
    ></VideoPlayer>, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(player).toMatchSnapshot();
});

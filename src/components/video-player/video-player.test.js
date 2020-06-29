import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "../video-player/video-player.jsx";

const src = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;

it(`Video-player renders correctly`, () => {
  const player = renderer
    .create(<VideoPlayer
      isPlaying={false}
      muted={true}
      src={src}
      poster={`some poster src`}
      playAndPauseHandler={() => {}}
    ></VideoPlayer>, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(player).toMatchSnapshot();
});

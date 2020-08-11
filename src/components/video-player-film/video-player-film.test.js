import React, {createRef} from "react";
import renderer from "react-test-renderer";
import VideoPlayerFilm from "../video-player-film/video-player-film.jsx";

it(`Video-player renders correctly`, () => {
  const player = renderer
    .create(
        <VideoPlayerFilm
          videoRef={createRef()}
          isPlaying={true}
          onPlayAndPauseClick={() => {}}
          onExitFilmClick={() => {}}
          history={{}}
        />
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(player).toMatchSnapshot();
});

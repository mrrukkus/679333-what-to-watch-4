import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "../video-player/video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Video-player have play and pause states`, () => {

  it(`Video have state pause`, () => {
    const playAndPauseHandler = jest.fn();

    const videoTemplate = mount(
        <VideoPlayer
          isPlaying={true}
          muted={true}
          src={`111`}
          poster={`aaa`}
          playAndPauseHandler={playAndPauseHandler}
        />
    );

    jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

    videoTemplate.setState({isPlaying: false});

    expect(playAndPauseHandler.mock.calls.length).toBe(1);
  });

  it(`Video have state play`, () => {
    const playAndPauseHandler = jest.fn();

    const videoTemplate = mount(
        <VideoPlayer
          isPlaying={false}
          muted={true}
          src={`111`}
          poster={`aaa`}
          playAndPauseHandler={playAndPauseHandler}
        />
    );

    jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});

    videoTemplate.setState({isPlaying: true});

    expect(playAndPauseHandler.mock.calls.length).toBe(1);
  });
});

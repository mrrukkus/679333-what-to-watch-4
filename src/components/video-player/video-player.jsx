import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
      isLoading: true
    };

    this._lastTimeout = null;
  }

  componentDidMount() {
    const {src, poster, muted} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = muted;

    this._lastTimeout = setTimeout(() => {
      this.setState({isPlaying: true});
    }, 1000);

    video.oncanplaythrough = () => {
      this.setState({
        isLoading: false
      });
    };

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.ontimeupdate = () => {
      this.setState({
        progress: video.currentTime
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.onplay = null;
    video.ontimeupdate = null;
    video.src = ``;
    video.poster = ``;
    video.muted = null;

    clearTimeout(this._lastTimeout);
  }

  render() {
    return (
      <Fragment>
        <video width="280" height="175"
          ref={this._videoRef}
        />
      </Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
      this.props.playAndPauseHandler();
    } else {
      video.pause();
      this.props.playAndPauseHandler();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  playAndPauseHandler: PropTypes.func.isRequired,
};

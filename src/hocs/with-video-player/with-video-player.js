import React, {createRef} from "react";
import PropTypes from "prop-types";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: this.props.isPlaying,
        isLoading: true
      };
    }

    componentDidMount() {
      const {src, poster, muted} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = muted;

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

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    muted: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;

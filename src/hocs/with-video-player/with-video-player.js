import React, {createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilmsList, getFilmByID} from "../../reducer/data/selectors.js";


const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: this.props.isPlaying,
        isLoading: true
      };

      this._onPlayAndPauseClick = this._onPlayAndPauseClick.bind(this);
    }

    componentDidMount() {
      const {film, muted} = this.props;
      const video = this._videoRef.current;

      video.src = film.video;
      video.poster = film.poster;
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
          progress: Math.floor(video.currentTime)
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
        video.muted = false;
        video.play();
      } else {
        video.pause();
      }
    }

    _onPlayAndPauseClick() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    render() {
      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
          isPlaying={this.state.isPlaying}
          onPlayAndPauseClick={this._onPlayAndPauseClick}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {
    film: PropTypes.object.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    muted: PropTypes.bool.isRequired,
    onExitFilmClick: PropTypes.func
  };

  const mapStateToProps = (state, ownProps) => ({
    film: ownProps.film || getFilmByID(getFilmsList(state), ownProps.match.params.id),
  });

  return connect(mapStateToProps)(WithVideoPlayer);
};

export default withVideoPlayer;

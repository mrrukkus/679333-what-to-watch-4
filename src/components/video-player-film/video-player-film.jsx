import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {getTimeLeft} from "../../utils.js";

const onFullScreenClick = (evt) => {
  if (document.fullscreen) {
    document.exitFullscreen();
  }
  evt.target.requestFullscreen();
};

const VideoPlayerFilm = (props) => {
  const {videoRef, isPlaying, onPlayAndPauseClick, onExitFilmClick} = props;
  let currentTime = null;
  let duration = null;

  if (videoRef.current) {
    currentTime = videoRef.current.currentTime;
    duration = videoRef.current.duration;
  }

  const valueCount = (currentTime * 100 / duration).toString();

  return (
    <Fragment>
      <div className="player">
        <video style={{width: `100%`, height: `100%`}}
          ref={videoRef}
        />
        <button type="button" className="player__exit" onClick={onExitFilmClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={valueCount} max="100"></progress>
              <div className="player__toggler" style={{left: valueCount + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{getTimeLeft(duration, currentTime)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={onPlayAndPauseClick}>
              {isPlaying ?
                <Fragment>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Fragment> :
                <Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </Fragment>
              }
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen" onClick={onFullScreenClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

VideoPlayerFilm.propTypes = {
  videoRef: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayAndPauseClick: PropTypes.func.isRequired,
  onExitFilmClick: PropTypes.func.isRequired
};

export default VideoPlayerFilm;

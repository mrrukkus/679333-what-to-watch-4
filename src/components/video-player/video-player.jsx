import React, {Fragment} from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {videoRef} = props;

  return (
    <Fragment>
      <video width="280" height="175"
        ref={videoRef}
      />
    </Fragment>
  );
};

VideoPlayer.propTypes = {
  videoRef: PropTypes.object.isRequired
};

export default VideoPlayer;

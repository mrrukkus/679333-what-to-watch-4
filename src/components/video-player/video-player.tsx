import * as React from "react";

interface Props {
  videoRef: any
}

const VideoPlayer: React.FC<Props> = (props: Props) => {
  const {videoRef} = props;

  return (
    <React.Fragment>
      <video width="280" height="175"
        ref={videoRef}
      />
    </React.Fragment>
  );
};

export default VideoPlayer;

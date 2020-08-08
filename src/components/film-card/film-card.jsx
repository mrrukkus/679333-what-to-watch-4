import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";
import {Link} from "react-router-dom";

const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

const FilmCard = (props) => {
  const {
    film,
    isMouseOvered,
    onCardMouseOver,
    onCardMouseOut,
    onCardClick,
  } = props;

  const renderContentOfCard = () => {
    return (
      isMouseOvered ?
        <VideoPlayerWrapped isPlaying={true} muted={true} src={film.preview} poster={film.img}/>
        :
        <img src={film.img} alt={film.title} width="280" height="175" />
    );
  };

  return (
    <React.Fragment>
      <Link to={`/films/${film.id}`} className="small-movie-card catalog__movies-card small-movie-card__link" onMouseOver={onCardMouseOver}
        onClick={onCardClick}
        onMouseOut={onCardMouseOut}>
        <div className="small-movie-card__image">
          {renderContentOfCard()}
        </div>
        <h3 className="small-movie-card__title">
          <div className="small-movie-card__link">{film.title}</div>
        </h3>
      </Link>
    </React.Fragment>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  isMouseOvered: PropTypes.bool.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default FilmCard;

import * as React from "react";
import {Link} from "react-router-dom";

import VideoPlayer from "../video-player/video-player";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import {Film} from "../../adapters/films";

interface Props {
  film: Film,
  isMouseOvered: boolean,
  onCardMouseOver: () => void,
  onCardMouseOut: () => void,
  onCardClick: () => void,
}

const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);

const FilmCard: React.FC<Props> = (props: Props) => {
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
        <VideoPlayerWrapped isPlaying={true} muted={true} film={film}/>
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
          <span className="small-movie-card__link" onClick={onCardClick}>{film.title}</span>
        </h3>
      </Link>
    </React.Fragment>
  );
};

export default FilmCard;

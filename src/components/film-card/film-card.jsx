import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {film, id, onCardAction, onImageAndTitleClick} = props;

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseOver={onCardAction}>
        <div className="small-movie-card__image" onClick={() => onImageAndTitleClick(id)}>
          <img src={film.img} alt={film.title} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title" onClick={() => onImageAndTitleClick(id)}>
          <a className="small-movie-card__link" href="movie-page.html" onClick={onCardAction}>{film.title}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onCardAction: PropTypes.func.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired
};

export default FilmCard;

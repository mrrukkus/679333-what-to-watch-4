import React from "react";
import PropTypes from "prop-types";


const FilmCard = (props) => {
  const {filmTitle, filmImageLink, onCardAction, onImageAndTitleClick} = props;

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseOver={onCardAction}>
        <div className="small-movie-card__image" onClick={() => onImageAndTitleClick(filmTitle)}>
          <img src={filmImageLink} alt={filmTitle} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title" onClick={() => onImageAndTitleClick(filmTitle)}>
          <a className="small-movie-card__link" href="movie-page.html" onClick={onCardAction}>{filmTitle}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

FilmCard.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmImageLink: PropTypes.string.isRequired,
  onCardAction: PropTypes.func.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired
};

export default FilmCard;

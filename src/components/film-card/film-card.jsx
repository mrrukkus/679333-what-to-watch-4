import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {filmTitle, filmImageLink, onTitleAction} = props;

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={filmImageLink} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleAction} onMouseOver={onTitleAction}>{filmTitle}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

FilmCard.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmImageLink: PropTypes.string.isRequired,
  onTitleAction: PropTypes.func.isRequired
};

export default FilmCard;

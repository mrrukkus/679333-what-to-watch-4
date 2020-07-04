import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import films from "../../mocks/films.js";

const getCards = (movies, onCardAction, onImageAndTitleClick) => {
  return (
    movies.map((movie, i) =>
      <FilmCard
        key={movie.title + i}
        id={films.indexOf(movie)}
        film={movie}
        onCardAction={onCardAction}
        onImageAndTitleClick={onImageAndTitleClick}>
      </FilmCard>
    )
  );
};

const FilmsList = (props) => {
  const {filmsList, onCardAction, onImageAndTitleClick} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getCards(filmsList, onCardAction, onImageAndTitleClick)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardAction: PropTypes.func.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired
};

export default FilmsList;

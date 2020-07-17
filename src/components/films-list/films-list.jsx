import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const getCards = (movies, onCardAction, onImageAndTitleClick, onGenreClick, onShowMoreClick) => {
  return (
    movies.map((movie, i) =>
      <FilmCard
        key={movie.title + i}
        id={i}
        film={movie}
        onCardAction={onCardAction}
        onImageAndTitleClick={onImageAndTitleClick}
        onGenreClick={onGenreClick}
        onShowMoreClick={onShowMoreClick}>
      </FilmCard>
    )
  );
};

const FilmsList = (props) => {
  const {
    filmsList,
    onCardAction,
    onImageAndTitleClick,
    onGenreClick,
    onShowMoreClick
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getCards(
            filmsList,
            onCardAction,
            onImageAndTitleClick,
            onGenreClick,
            onShowMoreClick
        )}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardAction: PropTypes.func.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

export default FilmsList;

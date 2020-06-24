import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const getCards = (films, onCardAction, openDetailsHandler) => {
  return (
    films.map((film, i) => <FilmCard key={film.title + i} id={i} film={film} onCardAction={onCardAction} onImageAndTitleClick={openDetailsHandler}></FilmCard>)
  );
};

const FilmsList = (props) => {
  const {filmsList, onCardAction, openDetailsHandler} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getCards(filmsList, onCardAction, openDetailsHandler)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardAction: PropTypes.func.isRequired,
  openDetailsHandler: PropTypes.func.isRequired
};

export default FilmsList;

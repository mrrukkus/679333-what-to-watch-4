import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const getCards = (films, onCardAction) => {
  return (
    films.map((film, i) => <FilmCard key={film.title + i} filmTitle={film.title} filmImageLink={film.img} onCardAction={onCardAction} ></FilmCard>)
  );
};

const FilmsList = (props) => {
  const {filmsList, onCardAction} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getCards(filmsList, onCardAction)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardAction: PropTypes.func.isRequired
};

export default FilmsList;

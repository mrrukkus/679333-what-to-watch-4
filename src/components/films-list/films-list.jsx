import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const getCards = (films, onTitleAction) => {
  return (
    films.map((film, i) => <FilmCard key={film.title + i} filmTitle={film.title} filmImageLink={film.img} onTitleAction={onTitleAction} ></FilmCard>)
  );
};

const FilmsList = (props) => {
  const {filmsList, onTitleAction} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getCards(filmsList, onTitleAction)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTitleAction: PropTypes.func.isRequired
};

export default FilmsList;

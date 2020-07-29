import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {DEFAULT_CARDS_COUNT} from "../../utils.js";
import {connect} from "react-redux";
import {getGenre} from "../../reducer/films/selectors.js";

const GenresListMap = {
  ALL_GENRES: `All genres`,
  COMEDY: `Comedy`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMA: `Drama`,
  ROMANCE: `Romance`,
  THRILLER: `Thriller`,
  ADVENTURE: `Adventure`,
  FANTASY: `Fantasy`,
  ACTION: `Action`
};

const genresList = Object.values(GenresListMap);

const getGenres = (currentGenre, onGenreClick, onShowMoreClick) => {
  const genreClickHandler = (evt, genre) => {
    evt.preventDefault();
    onGenreClick(genre);
    onShowMoreClick(DEFAULT_CARDS_COUNT);
  };

  return (genresList.map((genre, i) =>
    <li key={i} className={`catalog__genres-item${(currentGenre === genre) ? ` catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt)=> {
        genreClickHandler(evt, genre);
      }}>
        {genre}
      </a>
    </li>
  ));
};


const GenresList = (props) => {
  const {genre, onGenreClick, onShowMoreClick} = props;

  return (
    <Fragment>
      <ul className="catalog__genres-list">
        {getGenres(genre, onGenreClick, onShowMoreClick)}
      </ul>
    </Fragment>
  );
};


GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: getGenre(state)
});

export {GenresList};
export default connect(mapStateToProps)(GenresList);

import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {DEFAULT_CARDS_COUNT} from "../../utils.js";
import {connect} from "react-redux";

const GenresListMap = {
  ALL_GENRES: `All genres`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_AND_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`
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
  genre: state.genre
});

export {GenresList};
export default connect(mapStateToProps)(GenresList);

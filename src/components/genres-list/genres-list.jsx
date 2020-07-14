import React, {Fragment} from "react";
import PropTypes from "prop-types";

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

const getGenres = (currentGenre, onGenreClick) => {

  return (genresList.map((genre, i) =>
    <li key={i} className={`catalog__genres-item${(currentGenre === genre) ? ` catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        onGenreClick(genre);
      }}>
        {genre}
      </a>
    </li>
  ));
};


const GenresList = (props) => {
  const {genre, onGenreClick} = props;

  return (
    <Fragment>
      <ul className="catalog__genres-list">
        {getGenres(genre, onGenreClick)}
      </ul>
    </Fragment>
  );
};


GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenresList;

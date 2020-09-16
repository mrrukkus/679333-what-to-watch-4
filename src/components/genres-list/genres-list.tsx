import * as React from "react";
import {connect} from "react-redux";

import {DEFAULT_CARDS_COUNT} from "../../utils";
import {getGenre} from "../../reducer/films/selectors";

interface Props {    
  genre: string,
  onGenreClick: () => void,
  onShowMoreClick: () => void,
}

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
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        genreClickHandler(evt, genre);
      }}>
        {genre}
      </a>
    </li>
  ));
};


const GenresList: React.FC<Props> = (props: Props) => {
  const {genre, onGenreClick, onShowMoreClick} = props;

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {getGenres(genre, onGenreClick, onShowMoreClick)}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  genre: getGenre(state)
});

export {GenresList};
export default connect(mapStateToProps)(GenresList);

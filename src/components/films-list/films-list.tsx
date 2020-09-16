import * as React from "react";
import {connect} from "react-redux";

import FilmCard from "../film-card/film-card";
import withVideoCard from "../../hocs/with-video-card/with-video-card";
import {getFilteredFilmsList} from "../../reducer/films/films";
import {getGenre, getCurrentFilmsCardsCount} from "../../reducer/films/selectors";
import {ActionCreator as ActionCreatorFilms} from "../../reducer/films/films";
import {Operation as FilmOperation} from "../../reducer/films/films";
import {getFilmsList} from "../../reducer/data/selectors";
import {MORE_LIKE_THIS_CARDS_COUNT} from "../../utils";
import {Film} from "../../adapters/films";

interface Props {    
  filmsList: Film[],
  allFilms: Film[],
  onImageAndTitleClick: () => void,
  loadComments: () => void,
}

const FilmCardWrapped = withVideoCard(FilmCard);

const getCards = (movies: Film[], onImageAndTitleClick: () => void, allFilms: Film[], loadComments: () => void) => {
  return (
    movies.map((movie, i) =>
      <FilmCardWrapped
        key={movie.title + i}
        id={i}
        film={movie}
        onImageAndTitleClick={onImageAndTitleClick}
        filmIndex={allFilms.indexOf(movie)}
        loadComments={loadComments}
      />
    )
  );
};

const FilmsList = (props: Props) => {
  const {
    filmsList,
    onImageAndTitleClick,
    loadComments,
    allFilms
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getCards(filmsList, onImageAndTitleClick, allFilms, loadComments)}
      </div>
    </React.Fragment>
  );
};

const mapStateToPropsOnMain = (state) => ({
  genre: getGenre(state),
  filmsList: getFilmsList(state).slice(0, getCurrentFilmsCardsCount(state)),
  allFilms: getFilmsList(state)
});

const mapStateToPropsOnDetails = (state, ownProps) => ({
  filmsList: getFilteredFilmsList(ownProps.film.genre, getFilmsList(state)).slice(0, MORE_LIKE_THIS_CARDS_COUNT),
  allFilms: getFilmsList(state)
});

const mapDispatchToProps = (dispatch) => ({
  onImageAndTitleClick(filmIndex) {
    dispatch(ActionCreatorFilms.showDetails(filmIndex));
  },
  loadComments(film) {
    dispatch(FilmOperation.getComments(film));
  }
});

const FilmsListOnMain = connect(mapStateToPropsOnMain, mapDispatchToProps)(FilmsList);
const FilmsListOnDetails = connect(mapStateToPropsOnDetails, mapDispatchToProps)(FilmsList);
const FilmsListOnMyList = connect(null, mapDispatchToProps)(FilmsList);

export {FilmsList, FilmsListOnMain, FilmsListOnDetails, FilmsListOnMyList};

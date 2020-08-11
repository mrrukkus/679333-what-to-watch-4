import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FilmCard from "../film-card/film-card.jsx";
import withVideoCard from "../../hocs/with-video-card/with-video-card.js";
import {getFilteredFilmsList} from "../../reducer/films/films.js";
import {getGenre, getCurrentFilmsCardsCount} from "../../reducer/films/selectors.js";
import {ActionCreator as ActionCreatorFilms} from "../../reducer/films/films.js";
import {Operation as FilmOperation} from "../../reducer/films/films.js";
import {getFilmsList} from "../../reducer/data/selectors.js";
import {MORE_LIKE_THIS_CARDS_COUNT} from "../../utils.js";

const FilmCardWrapped = withVideoCard(FilmCard);

const getCards = (movies, onImageAndTitleClick, allFilms, loadComments) => {
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

const FilmsList = (props) => {
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

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object),
  allFilms: PropTypes.arrayOf(PropTypes.object),
  onImageAndTitleClick: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  film: PropTypes.object
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

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FilmCard from "../film-card/film-card.jsx";
import withVideoCard from "../../hocs/with-video-card/with-video-card.js";
import {getFilteredFilmsList} from "../../reducer/films/films.js";
import {getGenre, getCurrentFilmsCardsCount, getFilmToRenderDetails} from "../../reducer/films/selectors.js";
import {ActionCreator as ActionCreatorFilms} from "../../reducer/films/films.js";
import {getFilmsList} from "../../reducer/data/selectors.js";
import {MORE_LIKE_THIS_CARDS_COUNT} from "../../utils.js";

const FilmCardWrapped = withVideoCard(FilmCard);

const getFilmAtDetails = (state) => {
  return getFilmsList(state)[getFilmToRenderDetails(state)];
};

const getCards = (movies, onImageAndTitleClick, allFilms) => {
  return (
    movies.map((movie, i) =>
      <FilmCardWrapped
        key={movie.title + i}
        id={i}
        film={movie}
        onImageAndTitleClick={onImageAndTitleClick}
        filmIndex={allFilms.indexOf(movie)}
      />
    )
  );
};

const FilmsList = (props) => {
  const {
    filmsList,
    onImageAndTitleClick,
    allFilms
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getCards(filmsList, onImageAndTitleClick, allFilms)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired,
  allFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToPropsOnMain = (state) => ({
  genre: getGenre(state),
  filmsList: getFilmsList(state).slice(0, getCurrentFilmsCardsCount(state)),
  allFilms: getFilmsList(state)
});

const mapStateToPropsOnDetails = (state) => ({
  filmsList: getFilteredFilmsList(getFilmAtDetails(state).genre, getFilmsList(state)).slice(0, MORE_LIKE_THIS_CARDS_COUNT),
  allFilms: getFilmsList(state)
});

const mapDispatchToProps = (dispatch) => ({
  onImageAndTitleClick(film) {
    dispatch(ActionCreatorFilms.showDetails(film));
  }
});

const FilmsListOnMain = connect(mapStateToPropsOnMain)(FilmsList);
const FilmsListOnDetails = connect(mapStateToPropsOnDetails)(FilmsList);
const FilmsListOnMyList = connect(null, mapDispatchToProps)(FilmsList);

export {FilmsList, FilmsListOnMain, FilmsListOnDetails, FilmsListOnMyList};

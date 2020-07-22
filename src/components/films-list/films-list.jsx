import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import withVideoCard from "../../hocs/with-video-card/with-video-card.js";
import {getFilteredFilmsList} from "../../reducer.js";
import {connect} from "react-redux";
import {MORE_LIKE_THIS_CARDS_COUNT} from "../../utils.js";

const FilmCardWrapped = withVideoCard(FilmCard);

const getCards = (movies, onImageAndTitleClick) => {
  return (
    movies.map((movie, i) =>
      <FilmCardWrapped
        key={movie.title + i}
        id={i}
        film={movie}
        onImageAndTitleClick={onImageAndTitleClick}
      />
    )
  );
};

const FilmsList = (props) => {
  const {
    filmsList,
    onImageAndTitleClick,
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getCards(filmsList, onImageAndTitleClick)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired,
};

const mapStateToPropsOnMain = (state) => ({
  genre: state.genre,
  filmsList: getFilteredFilmsList(state.genre, state.films).slice(0, state.currentFilmsCardsCount)
});

const mapStateToPropsOnDetails = (state) => ({
  filmsList: getFilteredFilmsList(state.filmToRenderDetails && state.filmToRenderDetails.genre, state.films).slice(0, MORE_LIKE_THIS_CARDS_COUNT)
});

const FilmsListOnMain = connect(mapStateToPropsOnMain)(FilmsList);
const FilmsListOnDetails = connect(mapStateToPropsOnDetails)(FilmsList);

export {FilmsList, FilmsListOnMain, FilmsListOnDetails};

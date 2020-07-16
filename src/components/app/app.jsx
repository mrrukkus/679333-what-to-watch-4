import PropTypes from "prop-types";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import films from "../../mocks/films.js";
import {ActionCreator} from "../../reducer.js";
import {MORE_LIKE_THIS_CARDS_COUNT} from "../../utils.js";
import {INCREASER_CARDS_COUNT} from "../../utils.js";
import {calculateNewCardsCount} from "../../reducer.js";


const getFilteredFilmsList = (genre, filmsList) => {
  if (genre !== `All genres`) {
    return filmsList.filter((film) => film.genre === genre);
  }

  return filmsList;
};

const App = (props) => {
  const {
    genre,
    filmsList,
    filmsListMoreLikeThis,
    currentFilmsCardsCount,
    nextFilmsCardsCount,
    filmToRenderDetails,
    onImageAndTitleClick,
    onGenreClick,
    onShowMoreClick,
  } = props;

  const _renderMain = () => {
    if (!filmToRenderDetails) {
      return (
        <Main
          genre={genre}
          onGenreClick={onGenreClick}
          filmsList={filmsList}
          nextFilmsCardsCount={nextFilmsCardsCount}
          onCardAction={(evt) => {
            evt.preventDefault();
          }}
          onImageAndTitleClick={onImageAndTitleClick}
          onShowMoreClick={onShowMoreClick}
          currentFilmsCardsCount={currentFilmsCardsCount}
        />
      );
    }

    return (
      <FilmDetails
        film={filmToRenderDetails}
        onCardAction={(evt) => {
          evt.preventDefault();
        }}
        onImageAndTitleClick={onImageAndTitleClick}
        filmsList={filmsListMoreLikeThis}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderMain()}
        </Route>
        <Route exact path="/film-details">
          <FilmDetails
            film={films[1]}
            onCardAction={(evt) => {
              evt.preventDefault();
            }}
            onImageAndTitleClick={onImageAndTitleClick}
            filmsList={getFilteredFilmsList(films[1].genre, films)}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmsListMoreLikeThis: PropTypes.arrayOf(PropTypes.object),

  currentFilmsCardsCount: PropTypes.number.isRequired,
  nextFilmsCardsCount: PropTypes.number.isRequired,

  filmToRenderDetails: PropTypes.object,

  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  filmsList: getFilteredFilmsList(state.genre, state.films).slice(0, state.currentFilmsCardsCount),

  filmsListMoreLikeThis: getFilteredFilmsList(state.filmToRenderDetails ? state.filmToRenderDetails.genre : `All genres`, state.films).slice(0, MORE_LIKE_THIS_CARDS_COUNT),

  currentFilmsCardsCount: state.currentFilmsCardsCount,
  nextFilmsCardsCount: calculateNewCardsCount(state.currentFilmsCardsCount, INCREASER_CARDS_COUNT, getFilteredFilmsList(state.genre, state.films).length),

  filmToRenderDetails: state.filmToRenderDetails,
});

const mapDispatchToProps = (dispatch) => ({
  onImageAndTitleClick(film) {
    dispatch(ActionCreator.showDetails(film));
  },
  onGenreClick(genre) {
    dispatch(ActionCreator.filterChange(genre));
  },
  onShowMoreClick(count) {
    dispatch(ActionCreator.changeCardsCount(count));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

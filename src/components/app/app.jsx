import PropTypes from "prop-types";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import films from "../../mocks/films.js";
import {ActionCreator} from "../../reducer.js";
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
          filmsList={filmsList}
          nextFilmsCardsCount={nextFilmsCardsCount}
          onGenreClick={onGenreClick}
          onImageAndTitleClick={onImageAndTitleClick}
          onShowMoreClick={onShowMoreClick}
          currentFilmsCardsCount={currentFilmsCardsCount}
          onCardAction={(evt) => {
            evt.preventDefault();
          }}
        />
      );
    }

    return (
      <FilmDetails
        film={filmToRenderDetails}
        onGenreClick={onGenreClick}
        onImageAndTitleClick={onImageAndTitleClick}
        onShowMoreClick={onShowMoreClick}
        onCardAction={(evt) => {
          evt.preventDefault();
        }}
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
            onImageAndTitleClick={onImageAndTitleClick}
            onShowMoreClick={onShowMoreClick}
            onGenreClick={onGenreClick}
            onCardAction={(evt) => {
              evt.preventDefault();
            }}
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

export {App, getFilteredFilmsList};
export default connect(mapStateToProps, mapDispatchToProps)(App);

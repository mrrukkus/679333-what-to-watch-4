import PropTypes from "prop-types";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import films from "../../mocks/films.js";
import {INCREASER_CARDS_COUNT} from "../../utils.js";
import {calculateNewCardsCount, ActionCreator, getFilteredFilmsList} from "../../reducer.js";


const App = (props) => {
  const {
    genre,
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
          nextFilmsCardsCount={nextFilmsCardsCount}
          onGenreClick={onGenreClick}
          onImageAndTitleClick={onImageAndTitleClick}
          onShowMoreClick={onShowMoreClick}
          currentFilmsCardsCount={currentFilmsCardsCount}
        />
      );
    }

    return (
      <FilmDetails
        film={filmToRenderDetails}
        onGenreClick={onGenreClick}
        onImageAndTitleClick={onImageAndTitleClick}
        onShowMoreClick={onShowMoreClick}
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
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,

  currentFilmsCardsCount: PropTypes.number.isRequired,
  nextFilmsCardsCount: PropTypes.number.isRequired,

  filmToRenderDetails: PropTypes.object,

  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,

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

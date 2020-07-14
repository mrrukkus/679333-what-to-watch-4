import PropTypes from "prop-types";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import films from "../../mocks/films.js";
import {ActionCreator} from "../../reducer.js";

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
    filmToRenderDetails,
    onImageAndTitleClick,
    onGenreClick,
  } = props;

  const _renderMain = () => {
    if (!filmToRenderDetails) {
      return (
        <Main
          genre={genre}
          onGenreClick={onGenreClick}
          filmsList={filmsList}
          onCardAction={(evt) => {
            evt.preventDefault();
          }}
          onImageAndTitleClick={onImageAndTitleClick}
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
        filmsList={filmsList}
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
            filmsList={films}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmToRenderDetails: PropTypes.object,
  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  filmsList: getFilteredFilmsList(state.genre, state.films),
  filmToRenderDetails: state.filmToRenderDetails
});

const mapDispatchToProps = (dispatch) => ({
  onImageAndTitleClick(film) {
    dispatch(ActionCreator.showDetails(film));
  },
  onGenreClick(genre) {
    dispatch(ActionCreator.filterChange(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

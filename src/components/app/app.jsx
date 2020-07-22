import PropTypes from "prop-types";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import films from "../../mocks/films.js";
import {ActionCreator} from "../../reducer.js";


const App = (props) => {
  const {
    filmToRenderDetails,
    onImageAndTitleClick,
    onGenreClick,
    onShowMoreClick,
  } = props;

  const _renderMain = () => {
    if (!filmToRenderDetails) {
      return (
        <Main
          onGenreClick={onGenreClick}
          onImageAndTitleClick={onImageAndTitleClick}
          onShowMoreClick={onShowMoreClick}
        />
      );
    }

    return (
      <FilmDetails
        film={filmToRenderDetails}
        onImageAndTitleClick={onImageAndTitleClick}
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
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmToRenderDetails: PropTypes.object,

  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
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

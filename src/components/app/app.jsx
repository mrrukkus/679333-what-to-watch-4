import PropTypes from "prop-types";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import films from "../../mocks/films.js";
import {ActionCreator} from "../../reducer.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMain() {
    const filmToRenderDetails = films[this.props.filmIdToRenderDetails];

    if (!filmToRenderDetails) {
      return (
        <Main
          genre={this.props.genre}
          onGenreClick={this.props.onGenreClick}
          filmsList={this.props.films}
          onCardAction={(evt) => {
            evt.preventDefault();
          }}
          onImageAndTitleClick={this.props.onImageAndTitleClick}
        />
      );
    }

    return (
      <FilmDetails
        film={filmToRenderDetails}
        onCardAction={(evt) => {
          evt.preventDefault();
        }}
        onImageAndTitleClick={this.props.onImageAndTitleClick}
        filmsList={this.props.films}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/film-details">
            <FilmDetails
              film={films[1]}
              onCardAction={(evt) => {
                evt.preventDefault();
              }}
              onImageAndTitleClick={this.props.onImageAndTitleClick}
              filmsList={films}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmIdToRenderDetails: PropTypes.number.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
  filmIdToRenderDetails: state.filmIdToRenderDetails
});

const mapDispatchToProps = (dispatch) => ({
  onImageAndTitleClick(filmId) {
    dispatch(ActionCreator.showDetails(filmId));
  },
  onGenreClick(genre, movies) {
    dispatch(ActionCreator.filterChange(genre));
    dispatch(ActionCreator.getFilmsFilteredByGenre(genre, movies));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

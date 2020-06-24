import React from "react";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmIdToRenderDetails: -1
    };
    this._handler = this._handler.bind(this);
    this._films = this.props.films;
  }

  _handler(filmId) {
    this.setState({filmIdToRenderDetails: filmId});
  }

  _renderMain() {
    const {filmIdToRenderDetails} = this.state;

    if (filmIdToRenderDetails === -1) {
      return (
        <Main
          filmPromo={this._films.defaultFilm}
          filmsList={this._films.filmsForCards}
          onCardAction={(evt) => {
            evt.preventDefault();
          }}
          onImageAndTitleClick={this._handler}
        />
      );
    }

    const filmToRenderDetails = Object.assign({}, this._films.defaultFilm);

    filmToRenderDetails.title = this._films.filmsForCards[this.state.filmIdToRenderDetails].title;

    return (
      <FilmDetails
        film={filmToRenderDetails}
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
              film={this._films.defaultFilm}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.object.isRequired
};

export default App;

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
  }

  _handler(filmId) {
    this.setState({filmIdToRenderDetails: filmId});
  }

  _renderMain() {
    const filmToRenderDetails = this.props.films[this.state.filmIdToRenderDetails];

    if (!filmToRenderDetails) {
      return (
        <Main
          filmsList={this.props.films}
          onCardAction={(evt) => {
            evt.preventDefault();
          }}
          onImageAndTitleClick={this._handler}
        />
      );
    }

    return (
      <FilmDetails
        film={filmToRenderDetails}
        onCardAction={(evt) => {
          evt.preventDefault();
        }}
        onImageAndTitleClick={this._handler}
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
              film={this.props.films[1]}
              onCardAction={(evt) => {
                evt.preventDefault();
              }}
              onImageAndTitleClick={this._handler}
              filmsList={this.props.films}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;

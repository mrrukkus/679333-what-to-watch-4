import React from "react";
import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      film: -1
    };
    this._handler = this._handler.bind(this);
  }

  _handler(filmTitle) {
    this.setState({film: filmTitle});
  }

  _renderMain() {
    const {title, genre, year, filmsList} = this.props;
    const {film} = this.state;

    if (film === -1) {
      return (
        <Main
          title={title}
          genre={genre}
          year={year}
          filmsList={filmsList}
          onCardAction={(evt) => {
            evt.preventDefault();
          }}
          openDetailsHandler={this._handler}
        />
      );
    }

    return (
      <FilmDetails
        title={film}
        genre={`Drama`}
        year={2014}
        filmBackground={`img/bg-the-grand-budapest-hotel.jpg`}
        poster={`img/the-grand-budapest-hotel-poster.jpg`}
        score={`8,9`}
        ratingLevel={`Very good`}
        ratingCount={240}
        paragraphs={[`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`]}
        director={`Wes Andreson`}
        starring={`Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`}
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
              title={`The Grand Budapest Hotel`}
              genre={`Drama`}
              year={2014}
              filmBackground={`img/bg-the-grand-budapest-hotel.jpg`}
              poster={`img/the-grand-budapest-hotel-poster.jpg`}
              score={`8,9`}
              ratingLevel={`Very good`}
              ratingCount={240}
              paragraphs={[`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`]}
              director={`Wes Andreson`}
              starring={`Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: (PropTypes.string.isRequired || PropTypes.number.isRequired),
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;

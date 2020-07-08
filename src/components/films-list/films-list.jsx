import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import films from "../../mocks/films.js";
import {getFilteredFilmsList} from "../../reducer.js";

const getCards = (movies, onCardAction, onImageAndTitleClick) => {
  return (
    movies.map((movie, i) =>
      <FilmCard
        key={movie.title + i}
        id={films.indexOf(movie)}
        film={movie}
        onCardAction={onCardAction}
        onImageAndTitleClick={onImageAndTitleClick}>
      </FilmCard>
    )
  );
};

export default class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilmsGenre: this.props.genre,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {getCards(
              getFilteredFilmsList(this.state.currentFilmsGenre, this.props.filmsList),
              this.props.onCardAction,
              this.props.onImageAndTitleClick
          )}
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.genre !== this.props.genre) {
      this.setState({currentFilmsGenre: this.props.genre});
    }
  }
}

FilmsList.propTypes = {
  genre: PropTypes.string.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardAction: PropTypes.func.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired
};

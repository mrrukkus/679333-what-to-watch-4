import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";

const GenresListMap = {
  ALL_GENRES: `All genres`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_AND_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`
};

export default class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentGenre: this.props.genre
    };
  }

  _getGenres() {
    const genresList = Object.values(GenresListMap);

    return (genresList.map((genre, i) =>
      <li key={i} className={`catalog__genres-item${(this.state.currentGenre === genre) ? ` catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          this.props.onGenreAction(evt);
          this.props.onGenreClick(genre);
        }}>
          {genre}
        </a>
      </li>
    ));
  }

  render() {
    return (
      <Fragment>
        <ul className="catalog__genres-list">
          {this._getGenres()}
        </ul>
      </Fragment>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.genre !== this.props.genre) {
      this.setState({currentGenre: this.props.genre});
    }
  }
}

GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onGenreAction: PropTypes.func.isRequired
};

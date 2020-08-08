import React from "react";
import PropTypes from "prop-types";

import {FilmsListOnMain} from "../films-list/films-list.jsx";
import PreviewFilm from "../preview-film/preview-film.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import {DEFAULT_CARDS_COUNT} from "../../utils.js";

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onShowMoreClick(DEFAULT_CARDS_COUNT);
  }

  render() {
    const {
      previewFilm,
      onGenreClick,
      onImageAndTitleClick,
      onShowMoreClick,
      loadFavorites
    } = this.props;

    return (
      <React.Fragment>
        {previewFilm ? <PreviewFilm loadFavorites={loadFavorites}/> : null}

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenresList
              onGenreClick={onGenreClick}
              onShowMoreClick={onShowMoreClick}
            />

            <FilmsListOnMain
              onImageAndTitleClick={onImageAndTitleClick}
            />

            <ShowMore
              onShowMoreClick={onShowMoreClick}
            />

          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  previewFilm: PropTypes.object,

  onGenreClick: PropTypes.func.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  loadFavorites: PropTypes.func.isRequired
};

export default Main;

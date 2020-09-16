import * as React from "react";
import {connect} from "react-redux";

import {FilmsListOnMain} from "../films-list/films-list";
import PreviewFilm from "../preview-film/preview-film";
import GenresList from "../genres-list/genres-list";
import ShowMore from "../show-more/show-more";
import {DEFAULT_CARDS_COUNT} from "../../utils";
import {ActionCreator as ActionCreatorFilms} from "../../reducer/films/films";
import {getPreviewFilm} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Film} from "../../adapters/films";

interface Props {
  previewFilm: Film ,
  onGenreClick: () => void,
  onShowMoreClick: (number) => void,
  loadFavorites: () => void,
}

class Main extends React.PureComponent<Props> {
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

            <FilmsListOnMain/>

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

const mapStateToProps = (state) => ({
  previewFilm: getPreviewFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onImageAndTitleClick(film) {
    dispatch(ActionCreatorFilms.showDetails(film));
  },
  onGenreClick(genre) {
    dispatch(ActionCreatorFilms.filterChange(genre));
  },
  onShowMoreClick(count) {
    dispatch(ActionCreatorFilms.changeCardsCount(count));
  },
  loadFavorites() {
    dispatch(DataOperation.loadFavorites());
  }}
);

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

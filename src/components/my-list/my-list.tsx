import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {FilmsListOnMyList} from "../films-list/films-list";
import {getFavoriteFilms} from "../../reducer/data/selectors";
import {Film} from "../../adapters/films";

interface Props {
  filmsList: Film[],
  allFilms: Film[],
}

const MyList: React.FC<Props> = (props: Props) => {
  const {filmsList, allFilms} = props;

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="./img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsListOnMyList
            filmsList={filmsList}
            allFilms={allFilms}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  filmsList: getFavoriteFilms(state),
  allFilms: getFavoriteFilms(state)
});

export default connect(mapStateToProps)(MyList);

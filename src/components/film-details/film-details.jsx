import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs.jsx";
import {connect} from "react-redux";

import withActiveTabs from "../../hocs/with-active-tabs/with-active-tabs.js";
import {FilmsListOnDetails} from "../films-list/films-list.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data.js";
import {ActionCreator as ActionCreatorFilms} from "../../reducer/films/films.js";
import {getFilmsList} from "../../reducer/data/selectors.js";


const TabsWrapped = withActiveTabs(Tabs);

const FilmDetails = (props) => {
  const {film, authorizationStatus, onImageAndTitleClick, onPlayClick, onMyListClick} = props;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.filmBackground} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                  onPlayClick(film);
                }}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                    onMyListClick(film);
                  }}>
                    {film.isFavorite ?
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                    }
                    <span>My list</span>
                  </button> :
                  <Link to={`/login`} className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </Link>
                }
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <Link to="/add-review" className="btn movie-card__button">Add review</Link> :
                  null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.poster} alt={film.title + ` poster`} width="218" height="327" />
            </div>

            <TabsWrapped defaultActiveTab={`Overview`} film={film} onTabAction={() => {}}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsListOnDetails
            onImageAndTitleClick={onImageAndTitleClick}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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
};

FilmDetails.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  film: getFilmsList(state)[state.FILMS.filmToRenderDetails]
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick(film) {
    dispatch(ActionCreatorFilms.playFilm(film));
  },
  onMyListClick(film) {
    dispatch(ActionCreatorData.changeFavoriteStatus(film));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);

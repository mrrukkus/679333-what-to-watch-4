import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getPreviewFilm} from "../../reducer/data/selectors.js";
import {ActionCreator as ActionCreatorFilms} from "../../reducer/films/films.js";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data.js";


const PreviewFilm = (props) => {
  const {
    previewFilm,
    authorizationStatus,
    onPlayClick,
    onMyListClick
  } = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={previewFilm.filmBackground} alt={previewFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.NO_AUTH ?
              <Link to={`/login`} className="user-block__link">Sign in</Link>
              :
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            }
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={previewFilm.poster} alt={previewFilm.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{previewFilm.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{previewFilm.genre}</span>
                <span className="movie-card__year">{previewFilm.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                  onPlayClick(previewFilm);
                }}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                  onMyListClick(previewFilm);
                }}>
                  {previewFilm.isFavorite ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg> :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  }                  
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

PreviewFilm.propTypes = {
  previewFilm: PropTypes.object,
  authorizationStatus: PropTypes.string.isRequired,
  onPlayClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  previewFilm: getPreviewFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick(film) {
    dispatch(ActionCreatorFilms.playFilm(film));
  },
  onMyListClick(film) {
    dispatch(ActionCreatorData.changeFavoriteStatus(film));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewFilm);

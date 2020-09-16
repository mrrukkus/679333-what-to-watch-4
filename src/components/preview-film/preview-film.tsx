import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getPreviewFilm} from "../../reducer/data/selectors";
import {ActionCreator as ActionCreatorFilms} from "../../reducer/films/films";
import {ActionCreator as ActionCreatorData, Operation as OperationData} from "../../reducer/data/data";
import {Film} from "../../adapters/films";

interface Props {
  previewFilm: Film,
  authorizationStatus: string,
  onPlayClick: (film: Film) => void,
  onMyListClick: (film: Film) => void,
  loadFavorites: () => void,
}

const PreviewFilm = (props: Props) => {
  const {
    previewFilm,
    authorizationStatus,
    onPlayClick,
    onMyListClick,
    loadFavorites
  } = props;

  const onPlayClickHook = React.useCallback(() => {
    onPlayClick(previewFilm);
  }, []);
  const onMyListClickHook = React.useCallback(() => {
    onMyListClick(previewFilm);
    loadFavorites();
  }, [previewFilm]);

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
              <Link to="/login" className="user-block__link">Sign in</Link>
              :
              <Link to="/mylist">
                <div className="user-block__avatar" onClick={loadFavorites}>
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </Link>
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
                <Link to={`/films/${previewFilm.id}/player`} className="btn btn--play movie-card__button" type="button" onClick={onPlayClickHook}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <button className="btn btn--list movie-card__button" type="button" onClick={onMyListClickHook}>
                    {previewFilm.isFavorite ?
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                    }
                    <span>My list</span>
                  </button> :
                  <Link to="/login" className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
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
    dispatch(OperationData.postFavorite(film));
    dispatch(ActionCreatorData.changeFavoriteStatus(film));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewFilm);

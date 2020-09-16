import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import withReview from "../../hocs/with-review/with-review";
import Review from "../review/review";
import {getFilmsList, getFilmByID} from "../../reducer/data/selectors";
import {Operation as FilmOperation} from "../../reducer/films/films";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Film} from "../../adapters/films";

interface Props {
  film: Film,
  postComment: () => void,
  loadFavorites: () => void,
  history: {},
}

const WrappedReview = withReview(Review);

export const AddReview: React.FC<Props> = (props: Props) => {
  const {film, postComment, loadFavorites, history} = props;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.filmBackground} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{film.title}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <Link to="/mylist" onClick={loadFavorites}>
                <div className="user-block__avatar">
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </Link>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.poster} alt={film.title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <WrappedReview
            film={film}
            postComment={postComment}
            historyProp={history}
          />
        </div>
      </section>
    </React.Fragment>
  );
};


const mapStateToProps = (state, ownProps) => ({
  film: getFilmByID(getFilmsList(state), ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  postComment(commentData, film) {
    dispatch(FilmOperation.postComment(commentData));
    dispatch(FilmOperation.getComments(film));
  },
  loadFavorites() {
    dispatch(DataOperation.loadFavorites());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

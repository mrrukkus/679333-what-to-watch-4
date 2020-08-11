import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import withReview from "../../hocs/with-review/with-review.js";
import Review from "../review/review.jsx";
import {getFilmsList, getFilmByID} from "../../reducer/data/selectors.js";
import {Operation as FilmOperation} from "../../reducer/films/films.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";


const WrappedReview = withReview(Review);

export const AddReview = (props) => {
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
            <img src={film.img} alt={film.title} width="218" height="327" />
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

AddReview.propTypes = {
  film: PropTypes.object.isRequired,
  postComment: PropTypes.func.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
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

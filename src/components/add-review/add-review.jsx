import React, {createRef, Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const STARS_COUNT = 5;
const DEFAULT_RATE = 3;

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.rating = DEFAULT_RATE;
    this.commentRef = createRef();

    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  _setRating(rating) {
    this.rating = rating;
  }

  _renderRatingStars() {
    const start = [];
    for (let j = 1; j <= STARS_COUNT; j++) {
      let defaultCheck = j === DEFAULT_RATE ? true : false;

      start.push(
          <Fragment key={j}>
            <input className="rating__input" id={`star-${j}`} type="radio" name="rating" value={j} defaultChecked={defaultCheck}/>
            <label className="rating__label" htmlFor={`star-${j}`} onClick={() => {
              this._setRating(j);
            }}>{`Rating ` + j}</label>
          </Fragment>
      );
    }
    return start;
  }

  handleSubmitComment(evt) {
    evt.preventDefault();

    const {postComment, film} = this.props;

    postComment({
      id: film.id,
      rating: this.rating,
      comment: this.commentRef.current.value,
    });
  }

  render() {
    const {film} = this.props;
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
                <Link to={`/`} className="logo__link">
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
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={film.img} alt={film.title} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form" onSubmit={this.handleSubmitComment}>
              <div className="rating">
                <div className="rating__stars" ref={this.ratingRef}>
                  {this._renderRatingStars()}
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" ref={this.commentRef}></textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit">Post</button>
                </div>

              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

AddReview.propTypes = {
  film: PropTypes.object.isRequired,
  postComment: PropTypes.func.isRequired
};

export default AddReview;

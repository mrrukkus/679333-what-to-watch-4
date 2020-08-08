import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {DEFAULT_RATE} from "../../utils.js";

const STARS_COUNT = 5;

const getStarItem = (iterator, ratingStarsContainer, changeRatingHandler) => {
  let defaultCheck = iterator === DEFAULT_RATE;

  ratingStarsContainer.push(
      <Fragment key={iterator}>
        <input className="rating__input" id={`star-${iterator}`} type="radio" name="rating" value={iterator} defaultChecked={defaultCheck} onChange={() => {
          changeRatingHandler(iterator);
        }}/>
        <label className="rating__label" htmlFor={`star-${iterator}`}>{`Rating ${iterator}`}</label>
      </Fragment>
  );
};

const renderRatingStars = (changeRatingHandler) => {
  const ratingStarsItems = [];
  for (let j = 1; j <= STARS_COUNT; j++) {
    getStarItem(j, ratingStarsItems, changeRatingHandler);
  }
  return ratingStarsItems;
};


const Review = (props) => {
  const {submitComment, changeComment, changeRating} = props;

  return (
    <form action="#" className="add-review__form" onSubmit={submitComment}>
      <div className="rating">
        <div className="rating__stars">
          {renderRatingStars(changeRating)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength="50" maxLength="400" onChange={(evt) => {
          changeComment(evt.target.value);
        }}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

Review.propTypes = {
  submitComment: PropTypes.func.isRequired,
  changeComment: PropTypes.func.isRequired,
  changeRating: PropTypes.func.isRequired
};

export default Review;

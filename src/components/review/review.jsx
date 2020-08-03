import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {DEFAULT_RATE} from "../../utils.js";

const STARS_COUNT = 5;

const Review = (props) => {
  const {submitComment, commentRef, changeRating} = props;

  const renderRatingStars = () => {
    const start = [];
    for (let j = 1; j <= STARS_COUNT; j++) {
      let defaultCheck = j === DEFAULT_RATE ? true : false;

      start.push(
          <Fragment key={j}>
            <input className="rating__input" id={`star-${j}`} type="radio" name="rating" value={j} defaultChecked={defaultCheck} onChange={() => {
              changeRating(j);
            }}/>
            <label className="rating__label" htmlFor={`star-${j}`}>{`Rating ${j}`}</label>
          </Fragment>
      );
    }
    return start;
  };

  return (
    <form action="#" className="add-review__form" onSubmit={submitComment}>
      <div className="rating">
        <div className="rating__stars">
          {renderRatingStars()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength="50" maxLength="400" ref={commentRef}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

Review.propTypes = {
  commentRef: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
  changeRating: PropTypes.func.isRequired
};

export default Review;

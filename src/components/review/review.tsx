import * as React from "react";

import {DEFAULT_RATE} from "../../utils";

interface Props {
  submitComment: () => void,
  changeComment: (string) => void,
  changeRating: () => void,
}

const STARS_COUNT = 5;

const getStarItem = (iterator, ratingStarsContainer, changeRatingHandler) => {
  let defaultCheck = iterator === DEFAULT_RATE;

  const changeRatingHandlerHook = React.useCallback(() => {
    changeRatingHandler(iterator);
  }, []);

  ratingStarsContainer.push(
      <React.Fragment key={iterator}>
        <input className="rating__input" id={`star-${iterator}`} type="radio" name="rating" value={iterator} defaultChecked={defaultCheck} onChange={changeRatingHandlerHook}/>
        <label className="rating__label" htmlFor={`star-${iterator}`}>{`Rating ${iterator}`}</label>
      </React.Fragment>
  );
};

const renderRatingStars = (changeRatingHandler) => {
  const ratingStarsItems = [];
  for (let j = 1; j <= STARS_COUNT; j++) {
    getStarItem(j, ratingStarsItems, changeRatingHandler);
  }
  return ratingStarsItems;
};


const Review: React.FC<Props> = (props: Props) => {
  const {submitComment, changeComment, changeRating} = props;

  const changeCommentHook = React.useCallback((evt) => {
    changeComment(evt.target.value);
  }, []);

  return (
    <form action="#" className="add-review__form" onSubmit={submitComment}>
      <div className="rating">
        <div className="rating__stars">
          {renderRatingStars(changeRating)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength={50} maxLength={400} onChange={changeCommentHook}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" onClick={submitComment}>Post</button>
        </div>
      </div>
    </form>
  );
};

export default Review;

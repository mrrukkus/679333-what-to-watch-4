import React from "react";
import PropTypes from "prop-types";

const INCREASER_CARDS_COUNT = 8;

const calculateNewCardsCount = (currentCardsCount, increaser, filmsCount) => {
  let newCardsCount = currentCardsCount + increaser;

  if (filmsCount < newCardsCount) {
    newCardsCount = currentCardsCount + (filmsCount - currentCardsCount);

    return newCardsCount;
  }

  return newCardsCount;
};


const ShowMore = (props) => {
  const {
    onShowMoreClick,
    currentFilmsCardsCount,
    filmsListCount
  } = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={(evt) => {
        evt.preventDefault();
        onShowMoreClick(calculateNewCardsCount(currentFilmsCardsCount, INCREASER_CARDS_COUNT, filmsListCount));
      }}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
  currentFilmsCardsCount: PropTypes.number.isRequired,
  filmsListCount: PropTypes.number.isRequired
};

export default ShowMore;

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {INCREASER_CARDS_COUNT} from "../../utils.js";
import {calculateNewCardsCount, getFilteredFilmsList} from "../../reducer/films/films.js";
import {getGenre, getCurrentFilmsCardsCount} from "../../reducer/films/selectors.js";
import {getFilmsList} from "../../reducer/data/selectors.js";

const ShowMore = (props) => {
  const {
    onShowMoreClick,
    currentFilmsCardsCount,
    nextFilmsCardsCount
  } = props;

  const onButtonClick = (evt) => {
    evt.preventDefault();
    onShowMoreClick(nextFilmsCardsCount);
  };

  return (
    currentFilmsCardsCount < nextFilmsCardsCount && (
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onButtonClick}>Show more</button>
      </div>
    )
  );
};

ShowMore.propTypes = {
  currentFilmsCardsCount: PropTypes.number.isRequired,
  nextFilmsCardsCount: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilmsCardsCount: getCurrentFilmsCardsCount(state),
  nextFilmsCardsCount: calculateNewCardsCount(getCurrentFilmsCardsCount(state), INCREASER_CARDS_COUNT, getFilteredFilmsList(getGenre(state), getFilmsList(state)).length),
});

export {ShowMore};
export default connect(mapStateToProps)(ShowMore);


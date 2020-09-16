import * as React from "react";
import {connect} from "react-redux";

import {INCREASER_CARDS_COUNT} from "../../utils";
import {calculateNewCardsCount, getFilteredFilmsList} from "../../reducer/films/films";
import {getGenre, getCurrentFilmsCardsCount} from "../../reducer/films/selectors";
import {getFilmsList} from "../../reducer/data/selectors";

interface Props {
  onShowMoreClick: (number) => void,
  currentFilmsCardsCount: number,
  nextFilmsCardsCount: number,
}

const ShowMore: React.FC<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  currentFilmsCardsCount: getCurrentFilmsCardsCount(state),
  nextFilmsCardsCount: calculateNewCardsCount(getCurrentFilmsCardsCount(state), INCREASER_CARDS_COUNT, getFilteredFilmsList(getGenre(state), getFilmsList(state)).length),
});

export {ShowMore};
export default connect(mapStateToProps)(ShowMore);


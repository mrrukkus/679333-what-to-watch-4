import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {getRatingLevel, getFormattedTime} from "../../utils.js";

const TabsTitlesMap = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const DateOptions = {
  year: `numeric`,
  month: `long`,
  day: `numeric`,
};

const getDate = (dateString) => {
  const dateInMS = Date.parse(dateString);
  const correctDate = new Date(dateInMS);
  return correctDate.toLocaleString(`en-US`, DateOptions);
};


const Tabs = (props) => {
  const {activeTab,
    film,
    onTabChange,
  } = props;

  const renderTabsTitles = () => {
    return (
      Object.values(TabsTitlesMap).map((title, i) => {
        return (
          <li key={i} className={`movie-nav__item ${
            (activeTab === title) ?
              `movie-nav__item--active` : ``
          }`}>
            <a href="#" className="movie-nav__link" onClick={
              (evt) => onTabChange(evt, title)}>{title}</a>
          </li>
        );
      })
    );
  };

  const renderReviews = () => {
    return (
      film.comments.map((commentItem, i) => {
        return (
          <div className="review" key={i}>
            <blockquote className="review__quote">
              <p className="review__text">{commentItem.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{commentItem.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{getDate(commentItem.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{commentItem.rating.toFixed(1)}</div>
          </div>
        );
      })
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case (TabsTitlesMap.OVERVIEW):
        return (
          <Fragment>
            <div className="movie-rating">
              <div className="movie-rating__score">{film.score}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{getRatingLevel(film.ratingLevel)}</span>
                <span className="movie-rating__count">{film.ratingCount}</span>
              </p>
            </div>

            <div className="movie-card__text">
              {film.paragraphs}

              <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and other</strong></p>
            </div>
          </Fragment>
        );
      case (TabsTitlesMap.DETAILS):
        return (
          <Fragment>
            <div className="movie-card__text movie-card__row">
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Director</strong>
                  <span className="movie-card__details-value">{film.director}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Starring</strong>
                  <span className="movie-card__details-value">
                    {film.starring}
                  </span>
                </p>
              </div>

              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Run Time</strong>
                  <span className="movie-card__details-value">{getFormattedTime(film.runTime)}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Genre</strong>
                  <span className="movie-card__details-value">{film.genre}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Released</strong>
                  <span className="movie-card__details-value">{film.year}</span>
                </p>
              </div>
            </div>
          </Fragment>
        );
      case (TabsTitlesMap.REVIEWS):
        return (
          <Fragment>
            <div className="movie-card__reviews movie-card__row">
              <div className="movie-card__reviews-col">
                {renderReviews()}
              </div>
            </div>
          </Fragment>
        );
    }
    return null;
  };

  return (
    <Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {renderTabsTitles()}
          </ul>
        </nav>
        {renderTabContent()}
      </div>
    </Fragment>
  );
};


Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Tabs;


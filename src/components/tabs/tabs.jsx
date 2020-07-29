import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {getRatingLevel, getFormattedTime} from "../../utils.js";

const TabsTitlesMap = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
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
                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.</p>

                    <footer className="review__details">
                      <cite className="review__author">Kate Muir</cite>
                      <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,9</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                    <footer className="review__details">
                      <cite className="review__author">Bill Goodykoontz</cite>
                      <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,0</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.</p>

                    <footer className="review__details">
                      <cite className="review__author">Amanda Greever</cite>
                      <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,0</div>
                </div>
              </div>
              <div className="movie-card__reviews-col">
                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                    <footer className="review__details">
                      <cite className="review__author">Matthew Lickona</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,2</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer className="review__details">
                      <cite className="review__author">Paula Fleri-Soler</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,6</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer className="review__details">
                      <cite className="review__author">Paula Fleri-Soler</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,0</div>
                </div>
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


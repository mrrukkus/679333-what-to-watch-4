import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

export default class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlayingCard: false
    };

    this._lastTimeout = null;
    this._renderDetailsHandler = this._renderDetailsHandler.bind(this);
  }

  _renderDetailsHandler(evt) {
    evt.preventDefault();
    this.props.onImageAndTitleClick(this.props.film);
    clearTimeout(this._lastTimeout);
  }

  render() {
    const renderContentOfCard = () => {
      return (
        this.state.isMouseOvered ?
          <VideoPlayer isPlaying={true} muted={true} src={this.props.film.preview} poster={this.props.film.img}/>
          :
          <img src={this.props.film.img} alt={this.props.film.title} width="280" height="175" />
      );
    };

    return (
      <React.Fragment>
        <article className="small-movie-card catalog__movies-card" onMouseOver={() => {
          this._lastTimeout = setTimeout(() => {
            this.setState({isMouseOvered: true});
          }, 1000);
        }}
        onClick={this._renderDetailsHandler}
        onMouseOut={() => {
          clearTimeout(this._lastTimeout);
          this.setState({isMouseOvered: false});
        }}>
          <div className="small-movie-card__image">
            {renderContentOfCard()}
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html" onClick={this._renderDetailsHandler}>{this.props.film.title}</a>
          </h3>
        </article>
      </React.Fragment>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

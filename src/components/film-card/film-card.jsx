import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

export default class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOvered: false,
      isPlayingCard: false
    };
  }

  render() {
    const renderContentOfCard = () => {
      return (
        this.state.isMouseOvered ?
          <VideoPlayer isPlaying={false} muted={true} src={this.props.film.preview} poster={this.props.film.img} playAndPauseHandler={() => {}} />
          :
          <img src={this.props.film.img} alt={this.props.film.title} width="280" height="175" />
      );
    };

    return (
      <React.Fragment>
        <article className="small-movie-card catalog__movies-card" onMouseOver={() => {
          this.setState({isMouseOvered: true});
        }}
        onClick={() => {
          this.props.onImageAndTitleClick(this.props.id);
        }}
        onMouseOut={() => {
          this.setState({isMouseOvered: false});
        }}>
          <div className="small-movie-card__image">
            {renderContentOfCard()}
          </div>
          <h3 className="small-movie-card__title" onClick={() => this.props.onImageAndTitleClick(this.props.id)}>
            <a className="small-movie-card__link" href="movie-page.html" onClick={this.props.onCardAction}>{this.props.film.title}</a>
          </h3>
        </article>
      </React.Fragment>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onCardAction: PropTypes.func.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired
};
import PropTypes from "prop-types";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import films from "../../mocks/films.js";
import {ActionCreator} from "../../reducer.js";
import VideoPlayerFilm from "../video-player-film/video-player-film.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";

const VideoPlayerWrapped = withVideoPlayer(VideoPlayerFilm);

const App = (props) => {
  const {
    filmToRenderDetails,
    previewFilm,
    filmToPlay,
    onImageAndTitleClick,
    onGenreClick,
    onShowMoreClick,
    onPlayClick,
    onExitFilmClick
  } = props;

  const _renderMain = () => {
    if (filmToPlay) {
      return (
        <VideoPlayerWrapped isPlaying={true} muted={false} src={filmToPlay.preview} poster={filmToPlay.img} onExitFilmClick={onExitFilmClick}/>
      );
    }

    if (filmToRenderDetails) {
      return (
        <FilmDetails
          film={filmToRenderDetails}
          onImageAndTitleClick={onImageAndTitleClick}
          onPlayClick={onPlayClick}
        />
      );
    }

    return (
      <Main
        previewFilm={previewFilm}
        onGenreClick={onGenreClick}
        onImageAndTitleClick={onImageAndTitleClick}
        onShowMoreClick={onShowMoreClick}
        onPlayClick={onPlayClick}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderMain()}
        </Route>
        <Route exact path="/film-details">
          <FilmDetails
            film={films[1]}
            onImageAndTitleClick={onImageAndTitleClick}
            onPlayClick={onPlayClick}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmToRenderDetails: PropTypes.object,
  filmToPlay: PropTypes.object,
  previewFilm: PropTypes.object.isRequired,
  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onExitFilmClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmToRenderDetails: state.filmToRenderDetails,
  previewFilm: state.films[1],
  filmToPlay: state.filmToPlay
});

const mapDispatchToProps = (dispatch) => ({
  onImageAndTitleClick(film) {
    dispatch(ActionCreator.showDetails(film));
  },
  onGenreClick(genre) {
    dispatch(ActionCreator.filterChange(genre));
  },
  onShowMoreClick(count) {
    dispatch(ActionCreator.changeCardsCount(count));
  },
  onPlayClick(film) {
    dispatch(ActionCreator.playFilm(film));
  },
  onExitFilmClick() {
    dispatch(ActionCreator.exitFilm());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

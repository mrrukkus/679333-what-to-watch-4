import PropTypes from "prop-types";
import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import SignIn from "../sign-in/sign-in.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import {ActionCreator} from "../../reducer/films/films.js";
import VideoPlayerFilm from "../video-player-film/video-player-film.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";
import {getFilmToRenderDetails, getFilmToPlay} from "../../reducer/films/selectors.js";
import {getPreviewFilm} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user.js";

const VideoPlayerWrapped = withVideoPlayer(VideoPlayerFilm);

const App = (props) => {
  const {
    filmToRenderDetails,
    authorizationStatus,
    login,
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
            film={previewFilm}
            onImageAndTitleClick={onImageAndTitleClick}
            onPlayClick={onPlayClick}
          />
        </Route>
        <Route exact path="/sign-in">
          {authorizationStatus === AuthorizationStatus.NO_AUTH ?
            <SignIn
              onSubmit={login}
            /> :
            <Redirect to={`/`}/>
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  filmToRenderDetails: PropTypes.object,
  filmToPlay: PropTypes.object,
  previewFilm: PropTypes.object,
  onImageAndTitleClick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onExitFilmClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  filmToRenderDetails: getFilmToRenderDetails(state),
  previewFilm: getPreviewFilm(state),
  filmToPlay: getFilmToPlay(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
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
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

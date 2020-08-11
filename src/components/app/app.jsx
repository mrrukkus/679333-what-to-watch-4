import PropTypes from "prop-types";
import React, {Fragment} from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {connect} from "react-redux";

import SignIn from "../sign-in/sign-in.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import Main from "../main/main.jsx";
import VideoPlayerFilm from "../video-player-film/video-player-film.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.js";
import AddReview from "../../components/add-review/add-review.jsx";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {ActionCreator as ActionCreatorFilms, Operation as FilmOperation} from "../../reducer/films/films.js";
import {getFilmToRenderDetails, getFilmToPlay} from "../../reducer/films/selectors.js";
import {getPreviewFilm, getFilmsList} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const VideoPlayerWrapped = withVideoPlayer(VideoPlayerFilm);

const App = (props) => {
  const {
    allFilms,
    onExitFilmClick,
    authorizationStatus
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/films/:id" component={FilmDetails} />
        <PrivateRoute
          exact path="/mylist"
          authorizationStatus={authorizationStatus}
          render={() => {
            return (
              <MyList/>
            );
          }}
        />
        <PrivateRoute
          exact path="/films/:id/review"
          authorizationStatus={authorizationStatus}
          render={(otherProps) => {
            return (
              <AddReview
                {...otherProps}
              />
            );
          }}
        />
        <Route exact path="/films/:id/player"
          render={(otherProps) => {
            return allFilms.length > 0 ?
              (
                <VideoPlayerWrapped
                  {...otherProps}
                  isPlaying={true}
                  muted={true}
                  onExitFilmClick={onExitFilmClick}
                />
              ) :
              null;
          }}
        />
        <Route exact path="/error"
          render={
            () => (
              <Fragment>
                <h1>
                При отправке отзыва возникла ошибка.
                  <br/>
                  <small>Попробуйте снова, вдруг получится!</small>
                </h1>
                <Link to="/">Главная страница</Link>
              </Fragment>
            )}
        />
        <Route render={
          () => (
            <Fragment>
              <h1>
                404.
                <br/>
                <small>Здесь нечего смотреть. Ухади)))</small>
              </h1>
              <Link to="/">Главная страница</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onExitFilmClick: PropTypes.func.isRequired,
  allFilms: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  filmToRenderDetails: getFilmToRenderDetails(state),
  previewFilm: getPreviewFilm(state),
  filmToPlay: getFilmToPlay(state),
  allFilms: getFilmsList(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  postComment(commentData) {
    dispatch(FilmOperation.postComment(commentData));
  },
  onImageAndTitleClick(film) {
    dispatch(ActionCreatorFilms.showDetails(film));
  },
  onGenreClick(genre) {
    dispatch(ActionCreatorFilms.filterChange(genre));
  },
  onShowMoreClick(count) {
    dispatch(ActionCreatorFilms.changeCardsCount(count));
  },
  onExitFilmClick() {
    dispatch(ActionCreatorFilms.exitFilm());
  },
  loadFavorites() {
    dispatch(DataOperation.loadFavorites());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

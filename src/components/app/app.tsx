import * as React from "react";
import {HashRouter, Route, Switch, Link} from "react-router-dom";
import {connect} from "react-redux";

import SignIn from "../sign-in/sign-in";
import FilmDetails from "../film-details/film-details";
import Main from "../main/main";
import VideoPlayerFilm from "../video-player-film/video-player-film";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import AddReview from "../add-review/add-review";
import MyList from "../my-list/my-list";
import PrivateRoute from "../private-route/private-route";
import {ActionCreator as ActionCreatorFilms, Operation as FilmOperation} from "../../reducer/films/films";
import {getFilmsList} from "../../reducer/data/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Film} from "../../adapters/films";

interface Props {
  allFilms: Film[],
  onExitFilmClick: () => void,
  authorizationStatus: string,
}

const VideoPlayerWrapped = withVideoPlayer(VideoPlayerFilm);

const App: React.FC<Props> = (props: Props) => {
  const {
    allFilms,
    onExitFilmClick,
    authorizationStatus
  } = props;

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
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
              <React.Fragment>
                <h1>
                При отправке отзыва возникла ошибка.
                  <br/>
                  <small>Попробуйте снова, вдруг получится!</small>
                </h1>
                <Link to="/">Главная страница</Link>
              </React.Fragment>
            )}
        />
        <Route render={
          () => (
            <React.Fragment>
              <h1>
                404.
                <br/>
                <small>Здесь нечего смотреть. Ухади)))</small>
              </h1>
              <Link to="/">Главная страница</Link>
            </React.Fragment>
          )}
        />
      </Switch>
    </HashRouter>
  );
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
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

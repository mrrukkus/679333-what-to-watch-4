
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import createAPI from "./api";
import {Operation as DataOperation} from "./reducer/data/data";
import {AuthorizationStatus, ActionCreator, Operation as UserOperation} from "./reducer/user/user";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

const loadData = () => (dispatch) => {
  dispatch(DataOperation.loadPromo())
    .then(() => {
      dispatch(DataOperation.loadFilms());
    })
    .then(() => {
      dispatch(UserOperation.checkAuthorizationStatus());
    })
    .then(() => {
      dispatch(DataOperation.loadFavorites());
    });
};

store.dispatch(loadData());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

export {store};

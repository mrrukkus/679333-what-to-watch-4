
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer/reducer.js";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {Redirect} from "react-router-dom";
import {composeWithDevTools} from "redux-devtools-extension";
import createAPI from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {AuthorizationStatus, ActionCreator, Operation as UserOperation} from "./reducer/user/user.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  <Redirect to={`/`}/>
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromo());
store.dispatch(UserOperation.checkAuthorizationStatus());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

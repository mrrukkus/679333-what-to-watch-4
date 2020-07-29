import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer/reducer.js";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import createAPI from "./api.js";
import {ActionCreator, AuthorizationStatus, Operation} from "./reducer/data/data.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(Operation.loadFilms());
store.dispatch(Operation.loadPromo());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/index";
import rootSaga from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// we can pass multiple middleware ex: logger
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;

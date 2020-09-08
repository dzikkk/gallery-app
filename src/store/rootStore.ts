import createReduxMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from "redux";
import { rootReducer as reducer } from './rootReducers';
import { rootSaga as saga } from './rootSaga';
import { RootState, rootState } from "./rootState";
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { history } from './history';

const configureStore = (initialState: RootState) => {
  const sagaMiddleware = createReduxMiddleware();
  const store = createStore(
    reducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    ),
  );

  sagaMiddleware.run(saga);

  return store;
};

export const appStore = configureStore(rootState);
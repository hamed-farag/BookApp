/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import requestMiddleware from './middlewares/request';
import { routerMiddleware } from 'react-router-redux';

import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. requestMiddleware: Makes requests work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [requestMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false,
        })
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}

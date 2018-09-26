// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import 'sanitize.css/sanitize.css';
import 'bulma/css/bulma.css';
import './global-styles';

import configureStore from './configureStore';
// Import root app
import Home from 'containers/Home';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Home />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);

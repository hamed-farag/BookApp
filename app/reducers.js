import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import global from './redux/reducer';
import book from 'components/Book/redux/reducer';
import author from 'components/Author/redux/reducer';
import category from 'components/Category/redux/reducer';

import notification from 'components/shared/Notification/redux/reducer';

// Initial routing state
const routeInitialState = {
  location: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return Object.assign({}, state, { location: action.payload });
    default:
      return state;
  }
}

export default combineReducers({
  route: routeReducer,
  global,
  book,
  author,
  category,
  notification,
});

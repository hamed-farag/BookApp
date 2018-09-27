import consts from './consts';

const initialState = {
  isAppInEditMode: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case consts.CHANGE_APP_MODE:
      return { ...state, isAppInEditMode: !state.isAppInEditMode };
    default:
      return state;
  }
}

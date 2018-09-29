import consts from './consts';

const intitialState = {
  isVisible: false,
  message: '',
  type: 'info',
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case consts.CHANGE_VISIBILITY:
      const { message, type } = action.payload;

      return {
        ...state,
        isVisible: !state.isVisible,
        message: message || '',
        type: type || 'info',
      };

    default:
      return state;
  }
}

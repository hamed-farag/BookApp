import consts from './consts';

const intitialState = {
  items: [],
  hasError: null,
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case consts.FETCH_AUTHORS.SUCCESS:
      const result = action.resp.data;
      return {
        ...state,
        items: [...result.authors],
      };
    case consts.FETCH_AUTHORS.FAILURE:
      return { ...state, hasError: true };

    default:
      return state;
  }
}

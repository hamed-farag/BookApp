import consts from './consts';

const intitialState = {
  items: [],
  hasError: null,
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case consts.FETCH_CATEGORIES.SUCCESS:
      const result = action.resp.data;
      return {
        ...state,
        items: [...result.categories],
      };
    case consts.FETCH_CATEGORIES.FAILURE:
      return { ...state, hasError: true };

    default:
      return state;
  }
}

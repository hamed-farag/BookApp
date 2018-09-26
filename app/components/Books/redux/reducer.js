import consts from './consts';

const intitialState = {
  items: [],
  hasError: null,
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case consts.FETCH_BOOKS.SUCCESS:
      return { ...state, items: [...state.items, ...action.resp.data.books] };
    case consts.FETCH_BOOKS.FAILURE:
      return { ...state, hasError: true };

    default:
      return state;
  }
}

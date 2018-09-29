import consts from './consts';

const intitialState = {
  items: [],
  totalCount: 0,
  hasError: null,
  isLoading: true,
};

export default function(state = intitialState, action) {
  switch (action.type) {
    case consts.FETCH_BOOKS.SUCCESS:
      const result = action.resp.data;
      return {
        ...state,
        items: [...result.books],
        totalCount: result.totalCount,
        isLoading: false,
      };
    case consts.FETCH_BOOKS.FAILURE:
      return { ...state, hasError: true, isLoading: false };

    default:
      return state;
  }
}

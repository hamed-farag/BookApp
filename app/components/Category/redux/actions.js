import consts from './consts';
import requester from '../../../utilities/api/requester';
import { fetchCategoriesAPI } from '../apis';

export function fetchCategories() {
  return {
    type: consts.FETCH_CATEGORIES.START,
    request: {
      request: requester({
        url: fetchCategoriesAPI,
        method: 'GET',
      }),
    },
  };
}

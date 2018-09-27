import consts from './consts';
import requester from '../../../utilities/api/requester';
import { fetchBooksAPI } from '../apis';

export function fetchBooks(pageNumber, pageSize) {
  return {
    type: consts.FETCH_BOOKS.START,
    request: {
      request: requester({
        url: fetchBooksAPI,
        method: 'GET',
        params: {
          pageNumber,
          pageSize,
        },
      }),
    },
  };
}

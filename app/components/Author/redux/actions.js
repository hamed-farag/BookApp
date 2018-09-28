import consts from './consts';
import requester from '../../../utilities/api/requester';
import { fetchAuthorsAPI } from '../apis';

export function fetchAuthors() {
  return {
    type: consts.FETCH_AUTHORS.START,
    request: {
      request: requester({
        url: fetchAuthorsAPI,
        method: 'GET',
      }),
    },
  };
}

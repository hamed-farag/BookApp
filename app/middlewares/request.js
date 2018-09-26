// middleware.js
export default () => next => action => {
  const { request, type, ...rest } = action;

  if (!request) return next(action);

  const SUCCESS = `${type}/SUCCESS`;
  const REQUEST = `${type}/REQUEST`;
  const FAILURE = `${type}/FAILURE`;

  next({ ...rest, type: REQUEST });

  return request.request
    .then(resp => {
      if (
        request.successCallback &&
        typeof request.successCallback === 'function'
      ) {
        request.successCallback(resp.data);
      }
      next({ ...rest, resp, type: SUCCESS });
      return resp;
    })
    .catch(error => {
      if (
        request.failureCallback &&
        typeof request.failureCallback === 'function'
      ) {
        request.failureCallback(error);
      }
      next({ ...rest, error, type: FAILURE });
      throw error;
    });
};

import axios from 'axios';

export default function(config, successCallback, failureCallback) {
  const _request = axios(config);

  if (successCallback) {
    if (typeof successCallback === 'function') {
      _request.then(response => {
        successCallback(response);
      });
    } else {
      throw new Error('successCallback not a function');
    }
  }

  if (failureCallback) {
    if (typeof failureCallback === 'function') {
      _request.catch(error => {
        failureCallback(error);
      });
    } else {
      throw new Error('failureCallback not a function');
    }
  }

  // In case the developer will handle the callbacks manually
  // Using await or callbacks
  return _request;
}

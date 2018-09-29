import consts from './consts';

export function changeNotificationVisibility(config) {
  return {
    type: consts.CHANGE_VISIBILITY,
    payload: config,
  };
}

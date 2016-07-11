import { SET_LOCATION } from '../constants/actionTypes';

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    location,
  };
}

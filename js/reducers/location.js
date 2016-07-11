import type Action from './types';
import { SET_LOCATION } from '../constants/actionTypes';
export default function location(state: ?string = 'Utrecht' , action: Action) {
  if (action === SET_LOCATION) {
    return action.location;
  }
  return state;
}

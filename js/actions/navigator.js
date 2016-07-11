/*
* @flow
*/

'use strict';

import { POP_ROUTE, PUSH_ROUTE } from '../constants/actionTypes';

import type {
  Action
} from './types';
type Route = {[key: string]: string};

export function push(route: Route): Action {
  return {
    type: PUSH_ROUTE,
    route
  };
}

export function pop(): Action {
  return {
    type: POP_ROUTE
  };
}

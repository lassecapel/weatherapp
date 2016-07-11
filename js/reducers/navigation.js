/*
* @flow
*/

'use strict';

import { PUSH_ROUTE, POP_ROUTE } from '../constants/actionTypes';
import { NavigationExperimental } from 'react-native';

import type {
  Action,
  Route,
} from '../actions/types';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
   key: 'dashboard',
   title: 'Dashboard'
  }]
};

function equalRoutes(state: Object, route: Route): boolean {
  return state.routes[state.index].key === (route && route.key);
}
function canGoBack(state: Object): boolean {
  return state.index !== 0 || state.routes.length > 1;
}

export default function navigationState(state: Object = initialState, action: Action) : Object {
  switch (action.type) {
    case PUSH_ROUTE:
      if (equalRoutes(state, action.route)) {
        return state;
      }
      return NavigationStateUtils.push(state, action.route);
    case POP_ROUTE:
      if (canGoBack(state)) {
        return NavigationStateUtils.pop(state);
      }
      return state;
   default:
     return state;
  }
}

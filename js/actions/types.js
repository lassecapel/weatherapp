/*
* @flow
*/

'use strict';


import * as consts from '../constants/actionTypes';

export type Route = {
   [key: string]: string,
   [title: string]: string,
}

export type Action =
    { type: consts.SET_LOCATION, location: string }
  | { type: consts.PUSH_ROUTE, route: Route }
  | { type: consts.POP_ROUTE }
  ;

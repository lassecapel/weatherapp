/*
* @flow
*/
'use strict';

import { combineReducers } from 'redux';
import navigation from './navigation';
import location from './location';

export default combineReducers({
  navigation,
  location
});

/*
* @flow
*/

'use strict';

import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from './store/configureStore';

const store = configureStore();

export default function WeatherApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

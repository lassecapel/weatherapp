/*
* @flow
*/

'use strict';

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Button from '../common/button';

export default function Configuration({goBack}) {
  return (
    <View>
      <Text>Configuration goes here.</Text>
      <Button onPress={goBack}  lable="Go back" />
    </View>
  );
}

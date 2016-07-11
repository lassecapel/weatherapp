import React from 'react';
import { View } from 'react-native';
import Time from '../common/time';
import Weather from '../common/weather';
import Toolbar from '../common/toolbar';

export default function dashboard({ handleNavigate }) {
  return (
    <View style={{flex: 1, backgroundColor: '#D26363'}}>
      <Time />
      <Weather />
      <Toolbar onPress={handleNavigate} />
    </View>
  );
}

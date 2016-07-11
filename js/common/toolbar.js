import React from 'react';
import { View } from 'react-native';
import Button from './button';


const route = {
  type: 'push',
  route: {
    key: 'config',
    title: 'Configuration'
  }
};

export default function Toolbar({ onPress }) {
  function press(r) {
    console.log('press', onPress);
    onPress(r);
  }
  return (
    <View style={{height: 40}}>
      <Button onPress={() => press(route)} lable="Go To Settings" />
    </View>
  );
}

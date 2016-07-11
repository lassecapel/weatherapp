import React, { Component } from 'react';
import { View } from 'react-native';

export default function Weather() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}} />
      <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}} />
    </View>
  );
}

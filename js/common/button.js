import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
} from 'react-native';

const Button = ({lable, onPress}) => (
  <TouchableHighlight
    underlayColor="#EFEFEF"
    onPress={onPress}
    style={styles.button}>
      <Text>{lable}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#EDEDED',
  }
});

export default Button;

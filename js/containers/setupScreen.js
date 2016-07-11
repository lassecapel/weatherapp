import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { setLocation } from '../actions/location';

function setupScreen() {
  return (
    <View style={styles.setup}>
      <TextInput
            style={styles.input}
            placeholder="Waar kom je vandaan?"
            onChangeText={(text) => setLocation(text)}
          />
    </View>
  );
}
const styles = StyleSheet.create({
  setup: {
    flex: 1,
    backgroundColor: '#cf6c77',

  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    color: 'rgba(0,0,0,0.6)',
    fontSize: 32,
    height: 52,
    textAlign: 'center',
    marginTop: 16,
  }
});


export default connect(f => f, setLocation)(setupScreen);

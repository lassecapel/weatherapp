
/*
* @flow
*/

'use strict';

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import Navigator from './navigator';
import SetupScreen from './containers/setupScreen';


var App = React.createClass({
 render: function() {
   if (!this.props.hasLocation) {
     return <SetupScreen />;
   }

   return (
     <View style={styles.container}>
       <StatusBar
         hidden={true}
        />
       <Navigator />
     </View>
   );
 },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function select(store) {
 return {
   hasLocation: !!store.location
 };
}

export default connect(select)(App);

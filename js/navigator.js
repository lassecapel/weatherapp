import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './containers/dashboard';
import Configuration from './containers/configuration';
import { push, pop } from './actions/navigator';

import {
  BackAndroid,
  NavigationExperimental,
} from 'react-native';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.handleBackAction = this.handleBackAction.bind(this);
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction);
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction);
  }

  renderScene (props) {
    const { scene } = props;
    const prefix = 'scene_';
    if (scene.key === prefix + 'dashboard') {
      return <Dashboard
             handleNavigate={(action) => this.handleNavigate(action)} />;
    }
    if (scene.key === prefix + 'config') {
      return <Configuration goBack={() => this.handleBackAction()} />;
    }
  }

  handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
 }

 handleNavigate (action) {
   switch (action && action.type) {
     case 'push':
       this.props.pushRoute(action.route);
       return true;
     case 'back':
     case 'pop':
       return this.handleBackAction();
     default:
       return false;
   }
 }

 render () {
   return (
     <NavigationCardStack
       direction="horizonta"
       onNavigateBack={() => this.props.popRoute()}
       navigationState={this.props.navigation}
       renderScene={(props) => this.renderScene(props)} />
     );
  }
}

const select = state => ({ navigation: state.navigation });

const rootNav = connect(select, {
  pushRoute: (route) => push(route),
  popRoute: () => pop()
})(Navigator);

export default rootNav;

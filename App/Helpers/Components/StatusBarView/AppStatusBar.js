import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import AppStyles from '../../Styles';

const {
  iosStatusBarView,
} = AppStyles;

class AppStatusBar extends Component {
  render() {
    return (
      <View>
        <View style={iosStatusBarView} />
        <StatusBar barStyle='light-content' backgroundColor={'#2568a7'} />
      </View>
    );
  }
}

export default AppStatusBar;
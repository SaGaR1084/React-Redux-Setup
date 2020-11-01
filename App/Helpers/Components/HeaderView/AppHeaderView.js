import React, { Component, useState, useEffect } from 'react';
import { Text, View, } from 'react-native';

import AppStyles from '../../Styles';
const {
  appHeaderView,
  appHeaderTitle,
} = AppStyles;

class AppHeaderView extends Component {

  state = {

  }

  renderHeaderView = () => {
    return (
      <View style={appHeaderView}>
        <Text style={appHeaderTitle}>Home</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.renderHeaderView()}
      </View>
    );
  }
}

export default AppHeaderView;
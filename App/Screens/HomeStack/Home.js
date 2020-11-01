import React, { Component } from 'react';
import { View, } from 'react-native';
import AppStatusBar from '../../Helpers/Components/StatusBarView/AppStatusBar';
import AppHeaderView from '../../Helpers/Components/HeaderView/AppHeaderView';
import ViewManager from '../../Helpers/Components/ListGrideView/ViewManager';
import AppStyles from '../../Helpers/Styles';

const {
  container,
} = AppStyles;


class Home extends Component {

  state = {

  }

  render() {
    return (
      <View style={container}>
        <AppStatusBar />
        <ViewManager navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Home;
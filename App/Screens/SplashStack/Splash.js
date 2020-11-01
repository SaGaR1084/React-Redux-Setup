import React, { Component } from 'react';
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AppStyles from '../../Helpers/Styles';

const {
  container,
  appTitle,
  backgroundView
} = AppStyles;


class Splash extends Component {

  componentDidMount() {
    this.zoomIn();
  }

  AppManiaRef = ref => this.MyAppText = ref;
  zoomIn = () => this.MyAppText.zoomIn(3000).then(endState => console.log(endState.finished ? 'zoomIn finished' : 'zoomIn cancelled'));

  render() {
    return (
      <View style={container}>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor="transparent" />
        <View style={backgroundView} >
          <Animatable.View ref={this.AppManiaRef} style={{ flex: 1, }}>
            <Text style={appTitle}>My Demo App</Text>
          </Animatable.View>
        </View>
      </View>
    );
  }
}

export default Splash;
import React, { Component } from 'react';
import { YellowBox, } from 'react-native';
import Router from './App/Routers/AppNavigation';
import SplashScreen from './App/Screens/SplashStack/Splash';

export default class App extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    YellowBox.ignoreWarnings([
      'Warning: Each',
      'Warning: Failed'
    ]);
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ screen: "nav" });
    }, 2000);
  }
  
  state = {
    screen: 'splash',
  }


  render() {
    const { screen } = this.state;
    return screen === "splash" ? <SplashScreen /> : <Router />
  }
}

// import React, { Component } from "react";
// import { AppRegistry } from 'react-native';
// import Router from './App/Routers/AppNavigation';
// import SplashScreen from './App/Screens/SplashStack/Splash';
// import { name as appName } from './app.json';

// class index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       screen: "splash"
//     };
//   }
//   componentWillMount() {
//     setTimeout(() => {
//       this.setState({ screen: "nav" });
//     }, 2000);
//   }
//   render() {
//     return this.state.screen === "splash" ? <SplashScreen /> : <Router />;
//   }
// }

// console.disableYellowBox = true;
// AppRegistry.registerComponent(appName, () => index);


import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { name as appName } from './app.json';
import reducer from './App/reducer';
import App from './App';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "splash"
    };
  }

  render() {
    const axiosInstance = axios.create({
      baseURL: ''
    });

    const store = createStore(
      reducer,
      // applyMiddleware(thunk.withExtraArgument(axiosInstance), promise())
      applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => index);

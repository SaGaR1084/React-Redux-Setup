import { Dimensions, } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

// Home Screen
import Home from '../Screens/HomeStack/Home';
import UserData from '../Screens/HomeStack/UserData';
import ViewManager from '../Helpers/Components/ListGrideView/ViewManager';
import ImageView from '../Helpers/Components/ListGrideView/ImageView';
import Splash from '../Screens/SplashStack/Splash';


const { width, height } = Dimensions.get('window');


const SplashScreenStack = createStackNavigator({
  Splash
}, {
  headerMode: 'none'
}
);

// Home stacks
const HomeStack = createStackNavigator({
  Home,
  ViewManager,
  ImageView,
  UserData,
}, {
  headerMode: 'none'
}
);


export default createAppContainer(createSwitchNavigator(
  {
    SplashScreenStack: {
      screen: SplashScreenStack,
    },
    HomeStack: {
      screen: HomeStack
    },
  },
  {
    initialRouteName: 'HomeStack'
  }
));

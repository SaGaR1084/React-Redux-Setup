import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground, Text } from 'react-native';
import AppStatusBar from '../../Helpers/Components/StatusBarView/AppStatusBar';
import AppStyles from '../../Helpers/Styles';
import ImageHelper from '../../Helpers/ImageHelpers';

const {
  container,
  userBackImageView,
  userDataHeaderView,
  userDataBackView,
  userDataBackButton,
  userDataBottomMainView,
  userDataBottomView,
  userDataTitle,
} = AppStyles;

const {
  BackIcon,
} = ImageHelper;
class UserData extends Component {

  state = {
    ImageUri: '',
    UserName: '',
    UserLastName: '',
  };

  componentDidMount() {
    const { ImageUriData, UserNameData, } = this.props.navigation.state.params;
    this.setState({ ImageUri: ImageUriData, UserName: UserNameData, })
  }

  render() {
    const {
      ImageUri
    } = this.state
    console.log('ImageUser', this.state.ImageUser)
    return (
      <View style={container}>
        <AppStatusBar />
        <ImageBackground source={{ uri: ImageUri }} style={userBackImageView}>
          <View style={userDataHeaderView}>
            <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={userDataBackView}>
              <Image source={BackIcon} style={userDataBackButton} />
            </TouchableOpacity>
          </View>
          <View style={userDataBottomMainView}>
            <View style={userDataBottomView}>
              <Text style={userDataTitle}>
                Picture by:-
              </Text>
              <Text style={userDataTitle}>
                {this.state.UserName}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default UserData;
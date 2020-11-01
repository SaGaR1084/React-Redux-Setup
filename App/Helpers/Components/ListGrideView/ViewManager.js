import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import ImageView from './ImageView'
import AppHeaderView from '../HeaderView/AppHeaderView'
import AppStyles from '../../Styles';
import ImageHelper from '../../ImageHelpers';
const {
  container,
  appHeaderMainView,
  appHeaderIconView,
  appHeaderIcon,
} = AppStyles;

const {
  ListViewIcon,
  GrideViewIcon,
} = ImageHelper

class ViewManager extends Component {

  state = {
    ViewType: 'ListView',
  };

  renderManageViewIcon = () => {
    return (
      <View style={appHeaderMainView}>
        <AppHeaderView />
        <TouchableOpacity style={appHeaderIconView} onPress={() => { this.rederChangeHeaderIcon() }}>
          {this.state.ViewType == 'ListView' ?
            <Image source={ListViewIcon} style={appHeaderIcon} />
            :
            <Image source={GrideViewIcon} style={appHeaderIcon} />
          }
        </TouchableOpacity>
      </View>
    );
  };

  rederChangeHeaderIcon = () => {
    if (this.state.ViewType == 'ListView') {
      this.setState({ ViewType: 'GrideView' });
    } else {
      this.setState({ ViewType: 'ListView' });
    }
  };

  renderManageView = () => {
    return <ImageView imageViewType={this.state.ViewType} navigation={this.props.navigation} />
  };

  render() {
    return (
      <View style={container}>
        {this.renderManageViewIcon()}
        {this.renderManageView()}
      </View>
    );
  }
}

export default ViewManager
import React, { Component, useState } from 'react';
import { Text, Animated, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import AppStyles from '../../Styles';
import MyDataList from './ImageData.json';
import { fetchImage } from '../../../Action/index';

const {
  container,
  flatlistStyles,
  grideViewImageView,
  grideViewImage,
  listViewImageView,
  listViewImage,
  grideViewTitle,
  listViewTitle,
  grideViewUserFName,
  listViewUserFName,
} = AppStyles;

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 2000 }).start();
  }, []);
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

class ImageView extends Component {
  constructor(props) {
    super(props);
    this.renderOurAppView = this.renderOurAppView.bind(this);
  }

  state = {
    MyDataList: MyDataList.category,
    scrollY: new Animated.Value(0),
    imageView: '',
    imageData: [],
  };

  componentDidMount() {
    this.fetchMore();
  }

  componentDidUpdate() {
    if (this.state.imageView != this.props.imageViewType) {
      this.setState({ imageView: this.props.imageViewType })
    }
    if (this.props.allImageData.fetchImage != this.state.imageData) {
      this.setState({ imageData: this.props.allImageData.fetchImage })
    }
  }

  fetchMore = () => {
    this.props.fetchImage();
  };

  renderFlatlistDataView = () => {
    console.log('this.state.imageData====', this.state.imageData)
    return (
      <FlatList
        contentContainerStyle={this.state.imageView == 'GrideView' ? flatlistStyles : null}
        showsVerticalScrollIndicator={false}
        data={this.state.imageData}
        extraData={this.state}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderOurAppView}
      />
    );
  };

  renderOurAppView = ({ index, item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('UserData', { ImageUriData: item.urls.regular, UserNameData: item.user.name, }); }}>
        <FadeInView style={this.state.imageView == 'GrideView' ? grideViewImageView : listViewImageView} key={index}>
          <ImageBackground style={this.state.imageView == 'GrideView' ? grideViewImage : listViewImage} source={{ uri: item.urls.regular }}>
            <View style={this.state.imageView == 'GrideView' ? grideViewTitle : listViewTitle}>
              <Text style={this.state.imageView == 'GrideView' ? grideViewUserFName : listViewUserFName}>
                Picture by:-
              </Text>
              <Text style={this.state.imageView == 'GrideView' ? grideViewUserFName : listViewUserFName}>
                {item.user.name}
              </Text>
            </View>
          </ImageBackground>
        </FadeInView>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={container}>
        {this.renderFlatlistDataView()}
      </View>
    );
  }
}

setData = (fetchImage) => {
  this.setState({ imageData: fetchImage })
};

mapStateToProps = (fetchImage) => {
  console.log('mapStateToProps fetchImage:-', fetchImage)
  return { allImageData: fetchImage }
}

export default connect(mapStateToProps, { fetchImage })(ImageView);
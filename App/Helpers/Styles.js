import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const HelperConstant = {
  ColorWight: '#fff',
  ColorBlack: '#000',
  ColorDark: '#2568a7',
  ColorLight: '#eaf3fa',
};

const { ColorWight, ColorBlack, ColorDark, ColorLight } = HelperConstant;

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorBlack,
  },
  appTitle: {
    fontSize: 30,
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    color: ColorDark,
  },
  backgroundView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  appHeaderView: {
    backgroundColor: ColorDark,
    height: 50,
    width: '100%',
    justifyContent: 'center',
  },
  appHeaderLeftMargin: {
    marginLeft: 30,
  },
  appHeaderTitle: {
    fontSize: 20,
    alignSelf: 'center',
    color: ColorWight,
    justifyContent: 'center',
  },
  appHeaderMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: ColorDark,
    width: '100%',
    paddingHorizontal: 10,
  },
  appHeaderIconView: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  appHeaderIcon: {
    height: 20,
    width: 20,
    tintColor: ColorWight,
  },
  iosStatusBarView: {
    backgroundColor: ColorDark,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  statusBarBackgroundColor: {
    backgroundColor: ColorDark,
  },

  // ListView
  listViewImageView: {
    height: 180,
    width: '100%',
    marginBottom: 5,
  },
  listViewImage: {
    height: 180,
    width: '100%',
    justifyContent: 'flex-end',
  },
  grideViewTitle: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 2,
    paddingRight: 5,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  grideViewUserFName: {
    fontSize: 10,
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  grideViewUserLName: {
    fontSize: 10,
    color: '#fff',
  },

  // GrideView
  grideViewImageView: {
    marginVertical: 4,
  },
  grideViewImage: {
    height: height / 4,
    width: width / 3.3,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    borderRadius: 5,
  },
  flatlistStyles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '98%',
  },
  listViewTitle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingVertical: 2,
    paddingRight: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  listViewUserFName: {
    fontSize: 15,
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  listViewUserLName: {
    fontSize: 15,
    color: '#fff',
  },

  // User Data

  userBackImageView: {
    width: '100%',
    height: '100%',
  },
  userDataHeaderView: {
    backgroundColor: ColorDark,
    height: 50,
    justifyContent: 'center',
  },
  userDataBackView: {
    height: 35,
    width: 35,
  },
  userDataBackButton: {
    height: 35,
    width: 35,
    tintColor: ColorWight,
  },
  userDataBottomMainView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    height: Platform.OS === 'ios' ? 80 : 50,
    width: '100%',
  },
  userDataBottomView: {
    flexDirection: 'row',
    width: '95%',
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  userDataTitle: {
    color: ColorWight,
    fontSize: 20,
    marginHorizontal: 2,
  },
});

export default AppStyles;

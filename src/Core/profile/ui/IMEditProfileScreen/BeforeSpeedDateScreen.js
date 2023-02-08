import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, ScrollView, BackHandler, Image, View } from 'react-native';
import { connect } from 'react-redux';
import TextButton from 'react-native-button';
import { firebaseUser } from '../../../firebase';
import IMFormComponent from '../IMFormComponent/IMFormComponent';
import { setUserData } from '../../../onboarding/redux/auth';
import { IMLocalized } from '../../../localization/IMLocalization';
import { addDocument } from '../../../../cs530-additions/database';
import FastImage from 'react-native-fast-image';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

class BeforeSpeedDateScreen extends Component {
  
  static navigationOptions = ({ screenProps, navigation }) => {
    let appStyles = navigation.state.params.appStyles;
    let screenTitle = navigation.state.params.screenTitle;
    let currentTheme = appStyles.navThemeConstants[screenProps.theme];
    const { params = {} } = navigation.state;

    
    return {
      headerTitle: screenTitle,
      // headerRight: (
      //   <TextButton style={{ marginRight: 12 }} onPress={params.onFormSubmit}>
      //     Done
      //   </TextButton>
      // ),
    //   headerStyle: {
    //     backgroundColor: currentTheme.backgroundColor,
    //   },
    //   headerTintColor: currentTheme.fontColor,
    };
  };
  constructor(props) {

    super(props);
    this.appStyles = props.navigation.getParam('appStyles') || props.appStyles;

    this.dateName = props.navigation.getParam('dateName') || props.dateName;
    this.dateUrl = props.navigation.getParam('dateUrl') || props.dateUrl;
    this.dateId = props.navigation.getParam('dateId') || props.dateId;
    this.dateNum = props.navigation.getParam('dateNum') || props.dateNum;
    
    this.form = props.navigation.getParam('form') || props.form;
    this.onComplete =
      props.navigation.getParam('onComplete') || props.onComplete;

      this.state = {
      form: props.form,
      alteredFormDict: {}, 
    };
    // const { screenTitle } = props;
    this.didFocusSubscription = props.navigation.addListener(
      'didFocus',
      (payload) =>
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid,
        ),
    );
  }
  
  componentDidMount() {
    this.props.navigation.setParams({
      onFormSubmit: this.onFormSubmit,
    });
    this.willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      (payload) =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid,
        ),
    );
  }
  componentWillUnmount() {
    this.didFocusSubscription && this.didFocusSubscription.remove();
    this.willBlurSubscription && this.willBlurSubscription.remove();
  }
  onBackButtonPressAndroid = () => {
    this.props.navigation.goBack();
    return true;
  };
  isInvalid = (value, regex) => {
    const regexResult = regex.test(value);
    if (value.length > 0 && !regexResult) {
      return true;
    }
    if (value.length > 0 && regexResult) {
      return false;
    }
  };
  onFormSubmit = () => {

    // addDocument('PreDate', {
    //   user: this.props.user.id,
    //   })

    var newUser = this.props.user;
    const form = this.form;
    const alteredFormDict = this.state.alteredFormDict;
    var allFieldsAreValid = true;
    var jsonAdd=[];
    // var item;
    form.sections.forEach((section) => {
      section.fields.forEach((field) => {
        // console.log(field);
        jsonAdd.push(field.displayName+": "+ newUser[field.key]+", ");
        // jsonAdd+=item;
        const newValue = alteredFormDict[field.key];
        console.log(field.displayName);
        if (newValue != null) {
          if (field.regex && this.isInvalid(newValue, field.regex)) {
            allFieldsAreValid = false;
          } else {
            console.log(alteredFormDict[field.key]);
            newUser[field.key] = alteredFormDict[field.key];
          }
        }
      });
    });
    if (allFieldsAreValid) {
      // jsonAdd.push("matchId: "+ this.dateId);
      console.log(jsonAdd);
      // firebaseUser.updateUserData(this.props.user.id, newUser);
      // this.props.setUserData({ user: newUser });

      addDocument('PreDate', {
        user: this.props.user.id,
        jsonAdd,
        matchId: this.dateId
          
        });
        addDocument('Matchinfo', {
          user: this.props.user.id,
        dateName: this.dateName,
        dateUrl: this.dateUrl,
        dateId: this.dateId,
        dateNum: this.dateNum,
          })
      // this.props.navigation.goBack(); //TODO: point to next screen in SpeedDateStack
      // send to conversation screen

      this.props.navigation.navigate('Conversations', {
        // appStyles: DynamicAppStyles,
        // form: DatingConfig.PreDate,
        // screenTitle: IMLocalized("You've matched with ..." ),
        // dateName: dateName,
        // dateUrl: dateUrl,
        // dateId: dateId,
        // dateNum: dateNum,
      }
      );
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      alert(
        IMLocalized(
          'An error occurred while trying to update your account. Please make sure all fields are valid.',
        ),
      );
    }
  };
  onFormChange = (alteredFormDict) => {
    this.setState({ alteredFormDict });
  };
  render() {
    return (
      
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between'
      }}
        >
          
        <Text style={this.appStyles.navThemeConstants.light, {fontSize:24, textAlign: 'center', padding:10}}>{this.dateName}</Text>
        <Text style={this.appStyles.navThemeConstants.light, {fontSize:24, textAlign: 'center', padding:10}}>{this.dateNum}</Text>
        {/* <View>
        <Image
                  style={{
                    width: 50,
                    height: 50,
                    // tintColor: '#687cf0',
                    // resizeMode: 'cover',
                  }}
                  source={"https://firebasestorage.googleapis.com/v0/b/g-date-e9b3a.appspot.com/o/botphotos%2Fbot48.jpeg?alt=media&token=8247f55a-724a-45d1-a9f4-c31fb6a714fa"}
                  
                />
                {console.log("the date url is"+this.dateUrl)}
        </View>                  */}
                                        <FastImage
                                  style={{ flex: 3, textAlign: "center", 
                                  paddingLeft:450 }}
                                  source={{ uri: this.dateUrl }}
                                  
                                  // resizeMode={FastImage.resizeMode.center}
                                  />
        <IMFormComponent
          form={this.form}
          initialValuesDict={this.props.user}
          onFormChange={this.onFormChange}
          navigation={this.props.navigation}
          appStyles={this.appStyles}
        />
        <TextButton style={this.appStyles.navThemeConstants.light, {fontSize:20, textAlign: 'center', padding:10}} onPress={this.onFormSubmit}> Continue </TextButton>
      </ScrollView>
    );
  }
}
BeforeSpeedDateScreen.propTypes = {
  user: PropTypes.object,
  setUserData: PropTypes.func,
};
const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};
export default connect(mapStateToProps, { setUserData })(BeforeSpeedDateScreen);
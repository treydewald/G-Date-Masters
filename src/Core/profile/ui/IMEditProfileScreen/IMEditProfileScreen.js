import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import TextButton from 'react-native-button';
import { firebaseUser } from '../../../firebase';
import IMFormComponent from '../IMFormComponent/IMFormComponent';
import { setUserData } from '../../../onboarding/redux/auth';
import { IMLocalized } from '../../../localization/IMLocalization';
import { ScrollView } from 'react-native';
import { updateDoc } from '../../../../cs530-additions/database';

class IMEditProfileScreen extends Component {
  static navigationOptions = ({ screenProps, navigation }) => {
    let appStyles = navigation.state.params.appStyles;
    let screenTitle = navigation.state.params.screenTitle;
    let currentTheme = appStyles.navThemeConstants[screenProps.theme];
    const { params = {} } = navigation.state;

    return {
      headerTitle: screenTitle,
      headerRight: (
        <TextButton style={{ marginRight: 12 }} onPress={params.onFormSubmit}>
          Done
        </TextButton>
      ),
      headerStyle: {
        backgroundColor: currentTheme.backgroundColor,
      },
      headerTintColor: currentTheme.fontColor,
    };
  };

  constructor(props) {
    super(props);
    this.appStyles = props.navigation.getParam('appStyles') || props.appStyles;
    this.form = props.navigation.getParam('form') || props.form;
    this.onComplete =
      props.navigation.getParam('onComplete') || props.onComplete;

    this.state = {
      form: props.form,
      alteredFormDict: {},
    };
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
    this.props.navigation.navigate('ProfileIncomplete', { user: user });
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
    var newUser = this.props.user;
    const form = this.form;
    const alteredFormDict = this.state.alteredFormDict;
    var allFieldsAreValid = true;
    var problemFields;
    var profileNotFilled;

    form.sections.forEach((section) => {
      section.fields.forEach((field) => {
        // console.log(field)
        const newValue = alteredFormDict[field.key]?.trim();
        // console.log(newUser.[field.key]);
        if (newValue != null) {
          if (field.regex && this.isInvalid(newValue, field.regex)) {
            allFieldsAreValid = false;
          } else {
            newUser[field.key] = alteredFormDict[field.key]?.trim();
            problemFields += newUser[field.key];
          }
        }else{
          if (newUser[field.key] == "" || newUser[field.key] == undefined){
            if (field.key != "otherRace"){
                console.log("field: " + field.key + " item: " +newUser[field.key]);
                problemFields += field.key + ", ";
                profileNotFilled=true;
                
        }
      }
      }
      });
    });

    if (allFieldsAreValid) {
      // console.log(problemFields);
      firebaseUser.updateUserData(this.props.user.id, newUser);
      this.props.setUserData({ user: newUser });
      // console.log(problemFields);
      // console.log(profileNotFilled);
      console.log(this.props.user.profileCompleted);
      if (profileNotFilled==undefined){

      updateDoc('users', this.props.user.id, {profileCompleted: "true"});
      this.props.navigation.goBack();
      }else{
        alert("please complete the following fields"+problemFields);
        updateDoc('users', this.props.user.id, {profileCompleted: "false"});
        console.log("complete"+this.props.user.profileCompleted);
        // this.props.navigation.goBack();
      }
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
      <ScrollView>
        <IMFormComponent
          form={this.form}
          initialValuesDict={this.props.user}
          onFormChange={this.onFormChange}
          navigation={this.props.navigation}
          appStyles={this.appStyles}
        />
      </ScrollView>
    );
  }
}

IMEditProfileScreen.propTypes = {
  user: PropTypes.object,
  setUserData: PropTypes.func,
};

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};

export default connect(mapStateToProps, { setUserData })(IMEditProfileScreen);

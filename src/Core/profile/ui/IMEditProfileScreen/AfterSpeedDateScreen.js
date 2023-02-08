import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, ScrollView, BackHandler, View, Image } from 'react-native';
import { connect } from 'react-redux';
import TextButton from 'react-native-button';
import { firebaseUser } from '../../../firebase';
import IMFormComponent from '../IMFormComponent/IMFormComponent';
import { setUserData } from '../../../onboarding/redux/auth';
import { IMLocalized } from '../../../localization/IMLocalization';
import { addDocument, getDocument } from '../../../../cs530-additions/database';
import { firebase } from '../../../../Core/firebase/config';
import FastImage from 'react-native-fast-image';
import DynamicAppStyles from '../../../../DynamicAppStyles';
import DatingConfig from '../../../../DatingConfig';
// import getDocument from '../../../../cs530-additions/database';

var dateNum="";
var dateName="";
var dateUrl="";
var dateId="";



class AfterSpeedDateScreen extends Component {
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
    
    console.log("here");
    const db = firebase.firestore();
    // var matchesRef = db.collection("Matchifo");
    console.log("here2");
    // matchesRef.where("user", "==", this.props.user.id)
    
    db.collection("Matchinfo").where("user", "==", this.props.user.id).orderBy("dateNum")
    .get()
    .then(function(querySnapshot) {
        // querySnapshot.forEach(function(doc) {
          querySnapshot.forEach(documentSnapshot => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            console.log(documentSnapshot.get("dateName"));
            dateName=documentSnapshot.get("dateName");
            dateUrl=documentSnapshot.get("dateUrl");
            console.log(documentSnapshot.get("dateUrl"));
            dateNum=documentSnapshot.get("dateNum");
            dateId=documentSnapshot.get("dateId");
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(documentSnapshot => {
    //       console.log('Match ID: ', documentSnapshot.get("dateName"), documentSnapshot.get("dateUrl"));
    //       // allMatches.push(documentSnapshot.get("match"));
    //       // console.log("matches: "+allMatches);
    //       console.log("in query");
  
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });
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
  onFormSubmit = async () => {
    var newUser = this.props.user;
    const form = this.form;
    const alteredFormDict = this.state.alteredFormDict;
    var allFieldsAreValid = true;
    var jsonAdd=[];
    form.sections.forEach((section) => {
      section.fields.forEach((field) => {
        jsonAdd.push(field.displayName+": "+ newUser[field.key]+", ");
        // console.log(field.displayName);
        const newValue = alteredFormDict[field.key];
        if (newValue != null) {
          if (field.regex && this.isInvalid(newValue, field.regex)) {
            allFieldsAreValid = false;
          } else {
            newUser[field.key] = alteredFormDict[field.key];
          }
        }
      });
    });
    if (allFieldsAreValid) {
        addDocument('PostDate', {
            jsonAdd,
            user: this.props.user.id,
            matchId: dateId
              
            });
 
            if (dateNum == 2){
              // if the user is already on the second date, send them to final screen
             alert("Thank you for participating in this study, we should send you to another page here");
            }else{
              var date2id=this.props.user.matches[1];
              var date2= await getDocument('users',date2id);
              console.log(this.props.user.matches[1]);
              console.log(date2.profilePictureURL);

              this.props.navigation.navigate('PreDate', {
                appStyles: DynamicAppStyles,
                form: DatingConfig.PreDate,
                screenTitle: IMLocalized("Your second match is ...." ),
                dateName: date2.firstName,
                dateUrl: date2.profilePictureURL,
                dateId: date2.id,
                dateNum: 2,
              }
              );

      
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
      
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          flexGrow: 1,
        // flexDirection: 'row',
          justifyContent: 'space-between'
      }}
        >
          
        <Text style={this.appStyles.navThemeConstants.light, {fontSize:24, textAlign: 'center', padding:10}}>Rate your date with {dateName}</Text>

                                        <FastImage
                                  style={{ flexGrow: 1,textAlign: "center", height:500,
                                 }}
                                  source={{ uri: dateUrl }}
                                  
                                  // resizeMode={FastImage.resizeMode.center}
                                  
                                  />
                                          {/* <Text style={this.appStyles.navThemeConstants.light, {fontSize:24, textAlign: 'center', padding:10}}>{dateUrl}</Text> */}
                                 
        <IMFormComponent
          form={this.form}
          initialValuesDict={this.props.user}
          onFormChange={this.onFormChange}
          navigation={this.props.navigation}
          appStyles={this.appStyles}
        />
        <TextButton style={{fontSize:20, textAlign: 'center', padding:10}} onPress={this.onFormSubmit}> Continue </TextButton>
      </ScrollView>
    );
  }
}
AfterSpeedDateScreen.propTypes = {
  user: PropTypes.object,
  setUserData: PropTypes.func,
};
const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};
export default connect(mapStateToProps, { setUserData })(AfterSpeedDateScreen);
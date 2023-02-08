import React, { useState } from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import Button from 'react-native-button';

import { connect } from 'react-redux';

import { IMLocalized } from '../../localization/IMLocalization';
import dynamicStyles from './styles';
import { useColorScheme } from 'react-native-appearance';
import { setUserData } from '../redux/auth';
import authManager from '../utils/authManager';
import { localizedErrorMessage } from '../utils/ErrorCode';

const ResearcherScreen = (props) => {
  // const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const appStyles =
    props.navigation.state.params.appStyles ||
    props.navigation.getParam('appStyles');
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);
  const appConfig =
    props.navigation.state.params.appConfig ||
    props.navigation.getParam('appConfig');

  const onPressLogin = () => {
    setLoading(true);
    authManager
      .loginWithEmailAndPassword(
        email && email.trim(),
        password && password.trim(),
        appConfig,
      )
      .then((response) => {
        if (response.user) {
          const user = response.user;
          props.setUserData({
            user: response.user,
          });
          props.navigation.navigate('MainStack', { user: user });
        } else {
          setLoading(false);
          Alert.alert(
            '',
            localizedErrorMessage(response.error),
            [{ text: IMLocalized('OK') }],
            {
              cancelable: false,
            },
          );
        }
      });
  };

  const onFBButtonPress = () => {
    setLoading(true);
    authManager.loginOrSignUpWithFacebook(appConfig).then((response) => {
      if (response.user) {
        const user = response.user;
        props.setUserData({
          user: response.user,
        });
        props.navigation.navigate('MainStack', { user: user });
      } else {
        Alert.alert(
          '',
          localizedErrorMessage(response.error),
          [{ text: IMLocalized('OK') }],
          {
            cancelable: false,
          },
        );
      }
      setLoading(false);
    });
  };

  const onAppleButtonPress = async () => {
    authManager.loginOrSignUpWithApple(appConfig).then((response) => {
      if (response.user) {
        const user = response.user;

        props.setUserData({ user });
        props.navigation.navigate('MainStack', { user: user });
      } else {
        Alert.alert(
          '',
          localizedErrorMessage(response.error),
          [{ text: IMLocalized('OK') }],
          {
            cancelable: false,
          },
        );
      }
    });
  };

  const onForgotPassword = async () => {
    props.navigation.push('Sms', {
      isResetPassword: true,
      appStyles,
      appConfig,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignSelf: 'flex-start' }}
        onPress={() => props.navigation.goBack()}>
        <Image
          style={appStyles.styleSet.backArrowStyle}
          source={appStyles.iconSet.backArrow}
        />
      </TouchableOpacity>
      <Text style={styles.title}>
        Researcher View
      </Text>
      <Text style={styles.caption}>
        This is where the researcher can do everything
      </Text>

      <Button
        containerStyle={styles.loginContainer}
        style={styles.loginText}
        onPress={() => {
          props.navigation.navigate('Questions', { appStyles, appConfig });
        }}>
        {IMLocalized('Questions interface')}
      </Button>
      <Button
        containerStyle={styles.loginContainer}
        style={styles.loginText}
        onPress={() => {
          props.navigation.navigate('Researcher', { appStyles, appConfig });
        }}>

        {IMLocalized('2')}
      </Button>
      <Button
        containerStyle={styles.loginContainer}
        style={styles.loginText}
        onPress={() => {
          props.navigation.navigate('Researcher', { appStyles, appConfig });
        }}>

        {IMLocalized('3')}
      </Button>
      <Button
        containerStyle={styles.loginContainer}
        style={styles.loginText}
        onPress={() => {
          props.navigation.navigate('Researcher', { appStyles, appConfig });
        }}>

        {IMLocalized('4')}
      </Button>
      <Button
        containerStyle={styles.loginContainer}
        style={styles.loginText}
        onPress={() => {
          props.navigation.navigate('Signup', { appStyles, appConfig });
        }}>

        {IMLocalized('Register a new account')}
      </Button>
    </View>
    //   <View style={styles.container}>
    //     <KeyboardAwareScrollView
    //       style={{ flex: 1, width: '100%' }}
    //       keyboardShouldPersistTaps="always">
    //       <TouchableOpacity
    //         style={{ alignSelf: 'flex-start' }}
    //         onPress={() => props.navigation.goBack()}>
    //         <Image
    //           style={appStyles.styleSet.backArrowStyle}
    //           source={appStyles.iconSet.backArrow}
    //         />
    //       </TouchableOpacity>
    //       <Text style={styles.title}>{IMLocalized('Hello World')}</Text>
    //       <TextInput
    //         style={styles.InputContainer}
    //         placeholder={IMLocalized('E-mail')}
    //         placeholderTextColor="#aaaaaa"
    //         onChangeText={(text) => setEmail(text)}
    //         value={email}
    //         underlineColorAndroid="transparent"
    //         autoCapitalize="none"
    //       />
    //       <TextInput
    //         style={styles.InputContainer}
    //         placeholderTextColor="#aaaaaa"
    //         secureTextEntry
    //         placeholder={IMLocalized('Password')}
    //         onChangeText={(text) => setPassword(text)}
    //         value={password}
    //         underlineColorAndroid="transparent"
    //         autoCapitalize="none"
    //       />
    //       <View style={styles.forgotPasswordContainer}>
    //         <Button
    //           style={styles.forgotPasswordText}
    //           onPress={() => onForgotPassword()}>
    //           {IMLocalized('Forgot password?')}
    //         </Button>
    //       </View>
    //       <Button
    //         containerStyle={styles.loginContainer}
    //         style={styles.loginText}
    //         onPress={() => onPressLogin()}>
    //         {IMLocalized('Log In')}
    //       </Button>
    //       <Text style={styles.orTextStyle}> {IMLocalized('OR')}</Text>
    //       {appleAuth.isSupported && (
    //         <AppleButton
    //           cornerRadius={5}
    //           style={styles.appleButtonContainer}
    //           buttonStyle={AppleButton.Style.BLACK}
    //           buttonType={AppleButton.Type.SIGN_IN}
    //           onPress={() => onAppleButtonPress()}
    //         />
    //       )}
    //       {appConfig.isSMSAuthEnabled && (
    //         <Button
    //           containerStyle={styles.phoneNumberContainer}
    //           onPress={() =>
    //             props.navigation.navigate('Sms', {
    //               isSigningUp: false,
    //               appStyles,
    //               appConfig,
    //             })
    //           }>
    //           {IMLocalized('Login with phone number')}
    //         </Button>
    //       )}

    //       {loading && <TNActivityIndicator appStyles={appStyles} />}
    //     </KeyboardAwareScrollView>
    // //     </View>
  );
};

export default connect(null, {
  setUserData,
})(ResearcherScreen);

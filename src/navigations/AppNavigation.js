import { createStackNavigator } from 'react-navigation-stack';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  IMEditProfileScreen,
  IMUserSettingsScreen,
  IMContactUsScreen,
} from '../Core/profile';
import BeforeSpeedDateScreen from '../Core/profile/ui/IMEditProfileScreen/BeforeSpeedDateScreen';
import AfterSpeedDateScreen from '../Core/profile/ui/IMEditProfileScreen/AfterSpeedDateScreen';
import { IMChatScreen } from '../Core/chat';
import ConversationsScreen from '../screens/ConversationsScreen/ConversationsScreen';
import LoadScreen from '../Core/onboarding/LoadScreen/LoadScreen';
import SwipeScreen from '../screens/SwipeScreen/SwipeScreen';
import MyProfileScreen from '../screens/MyProfileScreen/MyProfileScreen';
import AddProfilePictureScreen from '../screens/AddProfilePictureScreen';
import LoginScreen from '../Core/onboarding/LoginScreen/LoginScreen';
import DeveloperScreen from '../Core/onboarding/DeveloperScreen/DeveloperScreen';
import ResearcherScreen from '../Core/onboarding/ResearcherScreen/ResearcherScreen';
import QuestionsScreen from '../Core/onboarding/QuestionsScreen/QuestionsScreen';
import SignupScreen from '../Core/onboarding/SignupScreen/SignupScreen';
import WelcomeScreen from '../Core/onboarding/WelcomeScreen/WelcomeScreen';
import AdminInput from '../cs530-additions/AdminPassScreen/AdminPass'
import WalkthroughScreen from '../Core/onboarding/WalkthroughScreen/WalkthroughScreen';
import SmsAuthenticationScreen from '../Core/onboarding/SmsAuthenticationScreen/SmsAuthenticationScreen';
import DynamicAppStyles from '../DynamicAppStyles';
import DatingConfig from '../DatingConfig';
// import IMChatScreen from '../Core/chat/IMChatScreen'

const middleware = createReactNavigationReduxMiddleware((state) => state.nav);

const LoginStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Login: { screen: LoginScreen },
    Developer: { screen: DeveloperScreen },
    Researcher: { screen: ResearcherScreen },
    Questions: { screen: QuestionsScreen },
    Signup: { screen: SignupScreen },
    Admin: { screen: AdminInput },
    Sms: { screen: SmsAuthenticationScreen },
  },
  {
    initialRouteName: 'Welcome',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: DatingConfig,
    },
    headerMode: 'none',
  },
);

const DeveloperStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Login: { screen: LoginScreen },
    Developer: { screen: DeveloperScreen },
    Researcher: { screen: ResearcherScreen },
    Questions: { screen: QuestionsScreen },
    Signup: { screen: SignupScreen },
    Sms: { screen: SmsAuthenticationScreen },
  },
  {
    initialRouteName: 'Developer',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: DatingConfig,
    },
    headerMode: 'none',
  },
);

const ResearcherStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Login: { screen: LoginScreen },
    Developer: { screen: DeveloperScreen },
    Researcher: { screen: ResearcherScreen },
    Questions: { screen: QuestionsScreen },
    Signup: { screen: SignupScreen },
    Sms: { screen: SmsAuthenticationScreen },
  },
  {
    initialRouteName: 'Researcher',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: DatingConfig,
    },
    headerMode: 'none',
  },
);


const DateStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Login: { screen: LoginScreen },
    Developer: { screen: DeveloperScreen },
    Researcher: { screen: ResearcherScreen },
    Questions: { screen: QuestionsScreen },
    Signup: { screen: SignupScreen },
    Sms: { screen: SmsAuthenticationScreen },
    Date: {screen: IMChatScreen }
  },
  {
    initialRouteName: 'Date',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: DatingConfig,
    },
    headerMode: 'none',
  },
);


const QuestionsStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Login: { screen: LoginScreen },
    Developer: { screen: DeveloperScreen },
    Researcher: { screen: ResearcherScreen },
    Questions: { screen: QuestionsScreen },
    Signup: { screen: SignupScreen },
    Sms: { screen: SmsAuthenticationScreen },
  },
  {
    initialRouteName: 'Questions',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: DatingConfig,
    },
    headerMode: 'none',
  },
);

const MyProfileStack = createStackNavigator(
  {
    MyProfile: { screen: MyProfileScreen },
    AccountDetails: { screen: IMEditProfileScreen },
    Settings: { screen: IMUserSettingsScreen },
    ContactUs: { screen: IMContactUsScreen },
    PreDate: { screen: BeforeSpeedDateScreen },
    PostDate: { screen: AfterSpeedDateScreen },
    Date: {screen: IMChatScreen }
  },
  {
    initialRouteName: 'MyProfile',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
    },
    headerLayoutPreset: 'center',
  },
);

const ConversationsStack = createStackNavigator(
  {
    Conversations: { screen: ConversationsScreen },
  },
  {
    initialRouteName: 'Conversations',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
    },
    // headerLayoutPreset: 'center',
    header: null,
  },
);

const doNotShowHeaderOption = {
  navigationOptions: {
    header: null,
  },
};

const DrawerStack = createStackNavigator(
  {
    Swipe: { screen: SwipeScreen },
    Conversations: { screen: ConversationsStack, ...doNotShowHeaderOption },
    MyProfileStack: { screen: MyProfileStack, ...doNotShowHeaderOption },
    AddProfilePicture: { screen: AddProfilePictureScreen },
    AccountDetails: { screen: IMEditProfileScreen },
    PreDate: { screen: BeforeSpeedDateScreen },
    PostDate: { screen: AfterSpeedDateScreen },
    Date: {screen: IMChatScreen }
  },
  {
    initialRouteName: 'Swipe',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
    },
    mode: 'modal',
    headerMode: 'screen',
    headerLayoutPreset: 'center',
  },
);

const MainStackNavigator = createStackNavigator(
  {
    NavStack: {
      screen: DrawerStack,
      navigationOptions: { header: null },
    },
    PersonalChat: { screen: IMChatScreen },
  },
  {
    initialRouteName: 'NavStack',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
    },
    headerMode: 'float',
  },
);

// Manifest of possible screens
const RootNavigator = createSwitchNavigator(
  {
    ProfileIncomplete: { screen: MyProfileStack},
    LoadScreen: { screen: LoadScreen },
    Admin: { screen: AdminInput },
    Walkthrough: { screen: WalkthroughScreen },
    LoginStack: { screen: LoginStack },
    DeveloperStack: { screen: DeveloperStack },
    ResearcherStack: { screen: ResearcherStack },
    QuestionsStack: { screen: QuestionsStack },
    MainStack: { screen: MainStackNavigator },
    DateStack: {screen: DateStack},
   
  },
  {
    initialRouteName: 'LoadScreen',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: DatingConfig,
    },
  },
);

const AppContainer = createReduxContainer(RootNavigator);

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppContainer);

export { RootNavigator, AppNavigator, middleware };

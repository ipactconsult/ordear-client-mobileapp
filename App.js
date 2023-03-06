import React from "react";
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MenuScreen from "./src/screens/MenuScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import InscrireScreen from "./src/screens/InscrireScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import CodeConfirmScreen from "./src/screens/CodeConfirmScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import { Switch, Route } from "react-router-dom";
import Profile from "./src/screens/Profile";
import codeSignUpConfirmation from "./src/screens/codeSignUpConfirmation";
import bottomTabScreen from "./src/screens/bottomTabScreen";
import editPorfileScreen from "./src/screens/editProfileScreen";
import Update_Profile from "./src/screens/Update_Profile";

const switchNavigator = createSwitchNavigator({

  loginFlow:  createStackNavigator ({
   
    ResetPasswordScreen: ResetPasswordScreen,
    //Splash: SplashScreen,
    Login : LoginScreen,
    Profile: Profile,
    edit: editPorfileScreen,
    //updateProfile : Update_Profile,
    Inscrire: InscrireScreen,
    signUpConfirmation: codeSignUpConfirmation,   
    ForgotPassword: ForgotPasswordScreen,
    CodeConfirmScreen: CodeConfirmScreen,
    ResetPasswordScreen: ResetPasswordScreen,
  }),

  mainFlow: createMaterialBottomTabNavigator({
   /* DishListFlow: createStackNavigator({
     
      //Menu : MenuScreen,
     //DishList : DishListScreen,
     //DishDetail: DishDetailScreen,
    }),*/
    Menu : MenuScreen,
   // Profile: Profile,
    //Account: AccountScreen,
  }),
   
});

const App =  createAppContainer(switchNavigator);

export default () => {
 return( 
  <AuthProvider>
    <App /> 
  </AuthProvider>
 );
};


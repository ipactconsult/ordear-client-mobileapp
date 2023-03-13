import React from "react";
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import MenuScreen from "./src/screens/MenuScreen";

import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import InscrireScreen from "./src/screens/InscrireScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import Profile from "./src/screens/ProfileScreen";
import editPorfileScreen from "./src/screens/editProfileScreen";
import verifPassCode from "./src/screens/verifPassCode";
import verifSignupCode from "./src/screens/verifSignupCode";
import EditPasswordScreen from "./src/screens/editPassword";
import EditPhoneScreen from "./src/screens/editPhone";

const switchNavigator = createSwitchNavigator({
  loginFlow:  createStackNavigator ({  
  
    //draw : CustomDrawer,
   // mainLayout: MainLayout,
   //Custom : CustomDrawer,
    Splash: SplashScreen,
    Login : LoginScreen,
    Inscrire: InscrireScreen,
    verifSignUpCode : verifSignupCode,
    profile: Profile,
    edit : editPorfileScreen, 
    editPassword: EditPasswordScreen, 
    editPhone: EditPhoneScreen,
   // bottom: bottomTabScreen,
    ForgotPassword: ForgotPasswordScreen,
    verifPassCodeScreen: verifPassCode,
    ResetPasswordScreen: ResetPasswordScreen,
  }),

  mainFlow: createMaterialBottomTabNavigator({
    DishListFlow: createStackNavigator({
    // DishList : DishListScreen,
     //DishDetail: DishDetailScreen,
     Menu : MenuScreen,
    }),
    Menu : MenuScreen,
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


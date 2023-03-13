import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainLayout from "../screens/MainLayout";
import {createStacknavigator} from '@react-navigation/stack';
import Animated, { exp } from "react-native-reanimated";

const Drawer = createDrawerNavigator()
const TestDraw = () => {

    return(
        <Drawer.Navigator
                screenOptions={{
                drawerPosition: 'left',
                drawerType: 'slide',
                headerShown: false,
                overlayColor: 'transparent',
                drawerStyle: {
                    flex: 1,
                    width: '75%',
                    backgroundColor: 'transparent'
                },
                sceneContainerStyle: {
                    backgroundColor: 'transparent'
                },
            }}
            initialRouteName="MainLayout"
            drawerContent={props => <MainLayout {...props} />}
            useLegacyImplementation
      >
    <Drawer.Screen name="MainLayout" component = {MainLayout} />
</Drawer.Navigator>
    )

}

export default TestDraw;
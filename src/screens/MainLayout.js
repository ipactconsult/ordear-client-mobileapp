import React, {useState} from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator,drawerAnimationStyle } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStacknavigator} from '@react-navigation/stack';
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer"

const MainLayout = ({animatedStyle}) => {
    return(
        <Animated.View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: 'white',
            ...animatedStyle
        }}>
            <Text style = {{alignSelf: 'center', marginTop: 400}}> MainLayout</Text>
        </Animated.View>
    )
}

MainLayout.navigationOptions = () => {
    return {
      headerShown: null,    
    };
};

const styles =StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'white',

    }
})

export default MainLayout;
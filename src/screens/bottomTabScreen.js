import React , {useState} from "react"
import { TextInput, ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./Profile";
import {FontAwesome5} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const bottomTabScreen = () => {

    return (
        <NavigationContainer>
              <StatusBar 
                barStyle="light-content"
                hidden= {false}
                backgroundColor ="#FF1717" 
            />
            <Tab.Navigator style= {styles.tabBar}>
                {
                    //tab screens

                    //tab icons

                }
                <Tab.Screen 
                  name="Cancel" 
                  component={ProfileScreen}
                  options={{
                    tabBarIcon: ({focused}) => {

                        <View style ={{position:'absolute', top:'50%'}}>
                            <FontAwesome5   name="user" size={20}/>                          
                        </View>
                    }
                  }}
                  
                  >
                </Tab.Screen>
                <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
                <Tab.Screen name="Cart" component={CartScreen}></Tab.Screen>
            </Tab.Navigator>

        </NavigationContainer>
    )

}
bottomTabScreen.navigationOptions = () => {
    return {
      headerShown: null,    
    };
};

 function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account</Text>
      </View>
    );
  }
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }  
  function CartScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cart</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor:'white',
        position:'absolute',
        bottom:30,
        marginHorizontal: 20,
        //Max height ...
        height: 60,
        borderRadius: 20,
        //shadow
        shadowColor:"#000",
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10
        }
    }
});

export default bottomTabScreen;
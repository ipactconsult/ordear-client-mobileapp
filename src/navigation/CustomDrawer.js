import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainLayout from "../screens/MainLayout";
import {createStacknavigator} from '@react-navigation/stack';
import Animated from "react-native-reanimated";
import { useDrawerProgress } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const primary = '#FF1717';
var label;
var icon;

const CustomDrawerItem = ({label, icon}) => {
    return (
        <TouchableOpacity style = {styles.touchItem} >
            <Image 
                source={icon} //require('../../assets/images/home.png')
                style={{
                    width: 18,
                    height: 18,
                    tintColor: '#fff'
                }}
            />
            <Text style = {{ marginLeft: 15, color: 'white'}}> {label}</Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({navigation}) => {
    return (
        <DrawerContentScrollView
                scrollEnabled= {true}
                contentContainerStyle ={{flex: 1}}
        >
            <View style = {styles.viewCustom}>

                {/* close  button*/}
                <View style ={{ alignItems: 'flex-start',  justifyContent: 'center'}}
                >
                    <TouchableOpacity style ={styles.touchable} onPress={() => navigation.closeDrawer()}>
                        <Image
                         source={require('../../assets/images/cross3.png')} 
                         style={{height: 20, width:20, tintColor:'#fff'}}
                        />
                    </TouchableOpacity>

                </View>

                {/* Profile*/}
                <TouchableOpacity style ={styles.touchable2} onPress ={() => console.log("Profile")}>
                    <Image source={require('../../assets/images/logo.png')}
                           style = {{height: 50, width: 50, borderColor: '#fff', borderWidth: 1, marginTop: 10, borderRadius: 10}}/>

                    <View style ={{marginLeft: 10, marginTop:10}}>  
                        <Text style ={{color:'white', fontWeight:'bold', fontSize: 18}}> Touil Safa </Text>
                        <Text style ={{color:'white', fontSize: 12}}> View your profile</Text>
                    </View>
                </TouchableOpacity>

                {/* Drawer Items*/}

                <View style= {{ flex: 1, marginTop: 20}}>
                    <CustomDrawerItem
                       label={'Home'}       
                       icon = {require('../../assets/images/home.png')}                                   
                    />

                    <CustomDrawerItem
                       label={'History'}       
                       icon = {require('../../assets/images/history.png')}                                   
                    />
                    <CustomDrawerItem
                       label={'Cart'}       
                       icon = {require('../../assets/images/cart.png')}                                   
                    />                                    

                    <CustomDrawerItem
                       label={'Wallet'}       
                       icon = {require('../../assets/images/wallet.png')}                                   
                    />
                    <CustomDrawerItem
                       label={'Notification'}       
                       icon = {require('../../assets/images/notification.png')}                                   
                    />   

                    {/* Line divider */}
                    <View 
                        style = {{
                            height: 0.7,
                            marginVertical: 10,
                            marginLeft: 10,
                            backgroundColor: '#fff'
                        }}
                    />

                    <CustomDrawerItem
                       label={'Help'}       
                       icon = {require('../../assets/images/help2.png')}                                   
                    />
                    <CustomDrawerItem
                       label={'Settings'}       
                       icon = {require('../../assets/images/settings.png')}                                   
                    />
                    <CustomDrawerItem
                       label={'Terms of use'}       
                       icon = {require('../../assets/images/terms.png')}                                   
                    />

                    <View style= {{marginTop:200}}>
                    <CustomDrawerItem
                       label={'Logout'}       
                       icon = {require('../../assets/images/logout.png')}                                   
                    />
                    </View>

                </View>
            </View>

        </DrawerContentScrollView>
    )
}

const CustomDrawer =  (props) => {

   const [progress, setProgress]= React.useState(new Animated.Value(0))
   const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    })
   const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26],
    })

    const animatedStyle= {borderRadius, transform : [{ scale }] }

    return (        
        <View style={styles.container}>
                <Drawer.Navigator                   
                    screenOptions={{
                        drawerType:"slide",
                        overlayColor:"#fff",
                        drawerStyle : {
                            flex:1,
                            width:'65%',
                            paddingRight: 20,
                            backgroundColor:primary
                        },    
                        sceneContainerStyle:{
                            backgroundColor: '#F5AC2A'
                        }                  
                        ,
                        initialRouteName:"MainLayout" 
                    }}                    
                                        
                    drawerContent={props => {
                        
                        setTimeout(() => {
                            setProgress(props.progress)
                        }, 0);
                       
                        return (
                          <CustomDrawerContent 
                             navigation = {props.navigation}
                          />
                        )
                    }}  
                >
                    <Drawer.Screen name="MainLayout"  options={{headerShown:false}}>
                         {props => <MainLayout {...props} 
                         animatedStyle
                        // drawerAnimationStyle = { animatedStyle}
                         />}
                    </Drawer.Screen>
                    
                </Drawer.Navigator> 
                          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'  
    },
    draw: {
        flex:1,
        width:'65%',
        paddingRight: 20,
        backgroundColor : '#fff'
    },

    viewCustom :{
        flex: 1,
        paddingHorizontal: 20
    },

    touchable :{
        alignItems: 'center',
        justifyContent:'center',
    },
    touchable2 :{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    touchItem :{
        flexDirection:'row',
        height: 40,
        marginBottom: 10,
        alignItems: 'center',
        paddingLeft: 10,
       // borderWidth: 0.5,
        //borderColor:'#fff',
        borderRadius: 5,
    },
    
});



export default CustomDrawer;
import React , {useState} from "react"
import { StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./Profile";
import {FontAwesome5} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const bottomTabScreen = ({navigation}) => {

    return (
        <NavigationContainer>
              <StatusBar 
                barStyle="light-content"
                hidden= {false}
                backgroundColor ="#FF1717" 
            />
            <Tab.Navigator style= {styles.tabBar}>
                
                <Tab.Screen 
                  name="Cart" 
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
                <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
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
          <StatusBar 
                barStyle="dark-content"
                hidden= {false}
                backgroundColor ="#fff" 
             />
        <Text>Cart</Text>
      </View>
    );
  }
 
const AccountScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
            <StatusBar 
                barStyle="dark-content"
                hidden= {false}
                backgroundColor ="#fff" 
             />
              <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column'}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                    <Image source={require('../../assets/images/woman.png')} 
                         style={{width:140, height:140, borderRadius:100, marginTop:0 }} >
                    </Image>

                    <View style={{flexDirection:'row'}}>                      
                      <Text style={{fontSize:25, fontWeight:'bold', padding:10, color:'#000',marginLeft: 20}}> Touil Safa</Text>
                      <Icon name='pencil' size={16} color="#818181" style={{padding:20, marginLeft: -20}} />
                    </View>                       
                   
                </View>

                {/* ----------------------- User Data ----------------------------- */}
                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>

                    <Icon name='envelope-o' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>safa.touil@esprit.tn</Text>
                </View>

                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>
                    <Icon name='phone' size={22} color="#818181"/>

                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>+1 305 453 1600</Text>
                </View>

                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>
                   <Icon name='address-book-o' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>Montreal, Canada</Text>
                </View>

                 <View style={{flexDirection: 'column', alignItems:'flex-end'}}>
                 <TouchableOpacity onPress={() => navigation.navigate('Login')/*(e) => handleSubmit(e)*/} style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20,backgroundColor:'#FF1717'
                                   }}>
                        
                    <Text style={{fontSize:15, color:'#fff', fontWeight:'blod'}}>Logout</Text>
                </TouchableOpacity>   
                 </View>   
                </View>
                     
           
        
      </View>
    );
}

  AccountScreen.navigationOptions = () => {
    return {
      headerShown: null,    
    };
  };

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
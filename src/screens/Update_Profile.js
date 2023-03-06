import React , {useState} from "react"
import { TextInput, ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
//import Buttons from '../Components/Buttons'
//import { Component } from "react/cjs/react.development"
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';


const Update_Profile = ({navigation}) => {
    
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
    const [phone, setPhone] = useState(''); 
    const [image, setImage] = useState(''); 
    const [address, setAdress] = useState(''); 
    const [role, setRole ]= useState(''); 
    return (
        
        <View style={{height:1000, backgroundColor: '#FF1717' }}>
            <StatusBar 
                barStyle="light-content"
                hidden= {false}
                backgroundColor ="#FF1717" 
             />

           
                <View style={{padding:10, width:'100%', backgroundColor: '#FF1717', height:150,}} />

              <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200, }}>
                    <Image source={require('../../assets/images/woman.png')} 
                         style={{width:150, height:150, borderRadius:100, marginTop:-70 }} >
                    </Image>                       
                </View>
              <View style = {{flexDirection: 'column', marginTop: 20}}>
                    
            
            <View style = {styles.formContainer }>
              <Icon name='user-o' size={22} color="#818181"/>
                <TextInput 
                    style = {styles.input} 
                    placeholder= "User name"
                    placeholderTextColor="#818181"
                    value={password}
                    onChangeText = {setPassword}
                />   
            </View>    
            <View style = {styles.formContainer }>
              <Icon name='lock' size={22} color="#818181"/>
                <TextInput 
                    style = {styles.input} 
                    placeholder= "New Password"
                    placeholderTextColor="#818181"
                    value={password}
                    onChangeText = {setPassword}
                />   
            </View>    
           <View style = {styles.formContainer}>
                <Icon name='check-circle-o' size={22} color="#818181"/>
                <TextInput 
                    style = {styles.input} 
                    placeholder= "Confirm password"
                    placeholderTextColor="#818181"
                    value={confirmPassword}
                    onChangeText = {setConfirmPassword}
                />                         
            </View>  
            <View style = {styles.formContainer}>
                <Icon name='phone' size={22} color="#818181"/>
                <TextInput 
                    style = {styles.input} 
                    placeholder= "Phone"
                    placeholderTextColor="#818181"
                   // value={confirmPassword}
                    onChangeText = {setConfirmPassword}
                />                         
            </View>  
            <View style = {styles.formContainer}>
                <Icon name='address-book-o' size={22} color="#818181"/>
                <TextInput 
                    style = {styles.input} 
                    placeholder= "Adresse"
                    placeholderTextColor="#818181"
                   // value={confirmPassword}
                    onChangeText = {setConfirmPassword}
                />                         
            </View>  

                
        </View>

        <TouchableOpacity style={styles.send} onPress={() => navigation.navigate('Profile')} >
            <Text style={styles.sendTxt} >
            Submit</Text>
            </TouchableOpacity>
              </View>
                     
           
        </View>
    )
};

Update_Profile.navigationOptions = () => {
    return {
      headerShown: null,    
    };
  };
  const styles = StyleSheet.create({

    entete: {
      height: 150,
      backgroundColor:"#FEF0E5",
      marginBottom:200,
    },
  
      container : {
          flex:1,
          backgroundColor: '#fff',
          flexDirection:'column',
          alignItems: 'center',
          width:"100%",
          justifyContent: 'center'
        },
  
        forgotTxt:{
          fontSize: 30,
          fontWeight:"600", 
          color: '#232323'
        },
  
        txt:{
         color: "#5E5E5E",
         marginLeft: 5,
         fontSize: 15,
         paddingTop: 0,
         alignSelf:'center'
        },
  
        formContainer:{
          flexDirection:'row',
          justifyContent: 'center',
          alignItems:'center',
          alignSelf:'center',
          backgroundColor:"#ededed",
          width:"90%",
          borderRadius: 10,
          height: 60,
          paddingLeft: 10,
          marginTop:10,
          marginBottom: 10,
          
        },
  
      input: {
          position: 'relative',
          height:'100%',
          width:'95%',
          paddingLeft: 20,
          alignSelf:'center',
         
      
        },
        press:{
            justifyContent:'center',
            width:'85%',
            backgroundColor:"#FF1717",
            height:50,
            marginBottom:20,
            borderRadius:10,
            marginTop: 10,
            marginLeft:30,
        },
        pressTxt:{
            fontSize:15,
            letterSpacing:1.5,
            textAlign:'center',
            position:'relative',
            color:"#fff"
        },
  
        send:{
          justifyContent:'center',
          alignSelf:'center',
          width:'90%',
          backgroundColor:"#FF1717",
          height:50,
          borderRadius:10,
          marginTop: 10,
          marginBottom:5
          
        },
        sendTxt:{
          fontSize:15,
          letterSpacing:1.5,
          textAlign:'center',
          position:'relative',
          color:"#fff"
        },
  });
  

export default Update_Profile;


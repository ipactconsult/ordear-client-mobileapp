import React , {useState} from "react"
import { TextInput, ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
//import Buttons from '../Components/Buttons'
//import { Component } from "react/cjs/react.development"
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';
import  {useForm, Controller} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9. !#$%&*+/?^_{1}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/

const ForgotPasswordScreen = ({navigation}) => {
 
  var email;

  const {control, handleSubmit,getValues, formState: {errors}} = useForm();
  console.log(errors);

   
 const onSignInPressed = (email) => {

  console.log(email);
  // console
  /*   console.log(email, password);
       const configuration = {
         method: "post",
         url: "http://192.168.1.11:5000/api/login",
         data: {
         email,
         password
         },
       };
 
       axios(configuration)
       .then((result) => {console.log("user connecté"); 
         navigation.navigate('Profile')  
       })
       .catch((error) => {console.log(error.response.data);console.log("user non connecté");})
 */
 
 }
    return (
        
        <View style={{height:1000, backgroundColor: '#FF1717' }}>
            <StatusBar 
                barStyle="light-content"
                hidden= {false}
                backgroundColor ="#FF1717" 
             />

            <ScrollView >
                <View style={{padding:10, width:'100%', backgroundColor: '#FF1717', height:250, /*borderBottomRightRadius: 40, borderBottomLeftRadius: 40*/}}>
                           
                </View>

              <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                    <Image source={require('../../assets/images/forgot2.png')} 
                         style={{width:150, height:150, borderRadius:100, marginTop:-70 }} >
                    </Image>                       
                </View>

                {/* ----------------------- Forgot Password Data ----------------------------- */}
            <View style = {{flexDirection: 'column', marginTop: 80}}
                   onSubmit={() => {onSignInPressed(onSubmit)}}>
                    
              <Text style = {styles.txt}> Enter the email adresse associated to your account</Text>
              
              <Controller
                  control={control}
                  name="email"
                  rules={{required: 'Email is required', minLength:{value: 3, message:'Password should be minimum 3 characters'}}}
                  render={ ({field: {value, onChange , onBlur}, fieldState:{error}}) => 
                  <>
                      
                        <View style = {[styles.formContainer,  {borderColor: error? 'red': '#e8e8e8'}]}>
                          <Icon name='envelope' size={22} color="#818181"/>
                          <TextInput 
                            autoCapitalize='none'           
                            style = {[styles.input]} 
                            placeholder= "Email"
                            placeholderTextColor="#818181"
                            //name={email}
                            value={value}
                            onChangeText = {onChange}
                            onBlur={onBlur}
                        /> 
                        </View>
                        {error && (<Text style={{color: 'red', alignSelf:'stretch', fontSize: 14.5}}>{error.message || 'Error'}</Text>)}
                                   
                  </>
                  }
              
            />  
               
                              
        </View>

                <TouchableOpacity style={styles.send} 
                  onPress={ handleSubmit(onSignInPressed(email = getValues("email")))}  >
                    <Text style={styles.sendTxt} >Send</Text>
                </TouchableOpacity>
                    
               <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', alignSelf:'center'}}>Back to sign In</Text>
               </TouchableOpacity>

                 
              </View>
                     
            </ScrollView>
        </View>
    )
};

ForgotPasswordScreen.navigationOptions = () => {
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
          paddingLeft: 20,
          marginTop:15,
          marginBottom: 10,
          borderWidth:1
        },
  
      input: {
          position: 'relative',
          height:'100%',
          width:'95%',
          paddingLeft: 20,
          alignSelf:'center',
         
      
        },
  
        send:{
          justifyContent:'center',
          alignSelf:'center',
          width:'95%',
          backgroundColor:"#FF1717",
          height:50,
          borderRadius:10,
          marginTop: 5,
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
  

export default ForgotPasswordScreen;


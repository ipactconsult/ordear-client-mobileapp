import React, { useState } from "react";
import { Input } from 'react-native-elements';
import { ScrollView, View,Text,Image, StyleSheet ,Button, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../../assets/images/reset.png'
import  {useForm, Controller} from 'react-hook-form';

const ResetPasswordScreen = ({navigation}) => {

   var password;
   var confirmPassword;

 //  const pwd = watch('password')

   const {control, handleSubmit,getValues, formState: {errors}} = useForm();
    console.log(errors);

   const onSignInPressed = (password, confirmPassword) => {
   
    // console
       console.log(password, confirmPassword);
         //navigation.navigate("Login")   
   }

    return(
        <View style={{height:1000, backgroundColor: '#FF1717' }}>
            <StatusBar 
                barStyle="light-content"
                hidden= {false}
                backgroundColor ="#FF1717" 
            />
          <ScrollView  >

            <View style={{padding:10, width:'100%', backgroundColor: '#FF1717', height:250, /*borderBottomRightRadius: 40, borderBottomLeftRadius: 40*/}}>
                           
            </View>
            <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                    <Image source={require('../../assets/images/forgot2.png')} 
                         style={{width:150, height:150, borderRadius:100, marginTop:-70 }} >
                    </Image>                       
                </View>


          <View style = {{flexDirection: 'column', marginTop: 40, alignItems:'center'}}  onSubmit={() => {onSignInPressed(onSubmit)}}>

            <Text style = {styles.txt}> Create your new password now !</Text>
            <View style={{flexDirection:'row'}}>
              
                <Controller
                  control={control}
                  name="password"
                  rules={{required: 'password is required'}}
                  render={ ({field: {value, onChange , onBlur}, fieldState:{error}}) => 
                  <>
                      <View style={{flexDirection:"column"}}>
                        <View style = {[styles.formContainer,  {borderColor: error? 'red': '#e8e8e8'}]}>
                          <Icon name='lock' size={22} color="#818181"/>
                          <TextInput 
                           secureTextEntry
                            autoCapitalize='none'           
                            style = {[styles.input]} 
                            placeholder= "Password"
                            placeholderTextColor="#818181"
                            //name={email}
                            value={value}
                            onChangeText = {onChange}
                            onBlur={onBlur}
                        /> 
                        </View>
                        {error && (<Text style={{color: 'red', alignSelf:'stretch', fontSize: 14.5}}>{error.message || 'Error'}</Text>)}
                      </View>               
               </>
              }
              
            />     

            </View>  
            <View style={{flexDirection:'row'}}>
                
                <Controller
                  control={control}
                  name="confirmPassword"
                  rules={{required: 'password is required'}}
                  render={ ({field: {value, onChange , onBlur}, fieldState:{error}}) => 
                  <>
                      <View style={{flexDirection:"column"}}>
                        <View style = {[styles.formContainer,  {borderColor: error? 'red': '#e8e8e8'}]}>
                          <Icon name='lock' size={22} color="#818181"/>
                          <TextInput 
                          secureTextEntry
                            autoCapitalize='none'           
                            style = {[styles.input]} 
                            placeholder= "Confirm password"
                            placeholderTextColor="#818181"
                            //name={email}
                            value={value}
                            onChangeText = {onChange}
                            onBlur={onBlur}
                        /> 
                        </View>
                        {error && (<Text style={{color: 'red', alignSelf:'stretch', fontSize: 14.5}}>{error.message || 'Error'}</Text>)}
                      </View>               
               </>
              }
              
            />                           
            </View>


            </View>

            <TouchableOpacity style={styles.send}
              onPress={handleSubmit(onSignInPressed(password = getValues("password"), confirmPassword=getValues("confirmPassword")))} >
            <Text style={styles.sendTxt} >
                Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', alignSelf:'center'}}>Back to sign In</Text>
            </TouchableOpacity>

           </View>
          </ScrollView>
            
        </View>
    );
};

ResetPasswordScreen.navigationOptions = () => {
    return {
      headerShown: null,    
    };
  };

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#fff',
        flexDirection:'column',
        alignItems: 'center',
        width:"100%",
        justifyContent: 'center'
      },

      txt:{
        color: "#5E5E5E",
        marginLeft: 5,
        fontSize: 15,
        paddingTop: 0,
       },
 
       formContainer:{
         flexDirection:'row',
         justifyContent: 'center',
         alignItems:'center',
         backgroundColor:"#ededed",
         width:"90%",
         borderRadius: 10,
         height: 60,
         paddingLeft: 20,
         marginTop:15,
         marginBottom: 10
       },
 
     input: {
         position: 'relative',
         height:'100%',
         width:'95%',
         marginLeft: 10     
       },
       send:{
        justifyContent:'center',
          alignSelf:'center',
          width:'90%',
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

export default ResetPasswordScreen;
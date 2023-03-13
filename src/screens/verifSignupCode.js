import React , {useState} from "react"
import { TextInput, ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
//import Buttons from '../Components/Buttons'
//import { Component } from "react/cjs/react.development"
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';
import ipAdress from '../constants/cte'

const verifSignupCode = ({navigation}) => {
    [activationCode, setCode]= React.useState('');

    /*------------------------- liaison avec back ------------------------------------ */
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        //Alert.alert("Submited");
        
        console.log(activationCode)
       // navigation.navigate('Login')
        const configuration = {
          method: "post",
          url: ip.ipAdress+"/activatewithcode",
          data: {
            activationCode,
          },
        };
    
        axios(configuration)
        .then((result) => {console.log("user registred"); navigation.navigate('Login')})
        .catch((error) => {console.log("user unregistred");})
      }

    /*------------------------------------------------------------------------------*/
    

    return (
        
      <View style={{height:"100%", backgroundColor: '#fff', flexDirection:'column', flex:1 }}  onSubmit={(e) => {handleSubmit(onSubmit)(e)}}>
        <StatusBar 
            barStyle="dark-content"
            hidden= {false}
            backgroundColor ="#fff" 
        />
           
                {/* ----------------------- Forgot Password Data ----------------------------- */}
              <Text style = {{fontWeight: '400', fontSize: 20, marginLeft :15, marginTop: 15}}> Verify your email adress to SignUp</Text>           
              <Text style = {styles.txt}> Enter the 4-digit code sent to your email </Text>
              
              <View style = {styles.formContainer}>
                <Icon name='check-circle-o' size={22} color="#818181"/>
                <TextInput 
                  maxLength={4}
                  autoCapitalize='none'
                  keyboardType="number-pad"           
                  style = {[styles.input]} 
                  placeholder= "Code verification"
                  placeholderTextColor="#818181"
                  value={activationCode}
                  onChangeText = {setCode}
                />
              </View>   

              <View style = {{ flex: 1, justifyContent:'flex-end', flexDirection:'column'}}>
                   <View style = {{flexDirection: 'row', justifyContent:'space-around'}}>
                    
                      
                   <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Login')}> 
                        <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', marginTop: 15, marginLeft:10}}>Back to sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.send} onPress={(e) => handleSubmit(e)}  >
                        <Text style={styles.sendTxt} >Send</Text>
                    </TouchableOpacity>
                  </View>
              </View>                

       

               

         
        </View>
    )
};

verifSignupCode.navigationOptions = () => {
    return {
      headerShown: null,    
    };
  };
  const styles = StyleSheet.create({

   
    txt:{
      color: "#5E5E5E",
      marginLeft: 5,
      fontSize: 15,
      paddingTop: 10,
      marginLeft:25
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
     },

   input: {
       position: 'relative',
       height:'100%',
       width:'95%',
       paddingLeft: 20,
       alignSelf:'center',
      
   
     },

     send:{
       width:'30%',
       backgroundColor:"#FF1717",
       height:50,
       borderRadius:30,
       marginTop: 0,
       marginBottom:15,
       marginLeft: 70
       
     },
     sendTxt:{
       fontSize:15,
       letterSpacing:1.5,
       textAlign:'center',
       position:'relative',
       color:"#fff",
       marginTop: 12
     },

     touchable:{
       borderWidth: 1,
       borderRadius: 30,
       height:50,
       width: 120,
       borderColor: '#818181'
     }
  });
  

export default verifSignupCode;


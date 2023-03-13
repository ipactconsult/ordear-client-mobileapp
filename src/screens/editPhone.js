import React, { useState } from "react";
import { ScrollView, View,Text,Image, StyleSheet ,Button, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import ipAdress from '../constants/cte'

const EditPhoneScreen = ({navigation}) => {

  const [phone, setPhone]= useState('');

  /*------------------------- liaison avec back ------------------------------------ */
    const handleSubmit = (e) => {
      // prevent the form from refreshing the whole page
      e.preventDefault();
      // make a popup alert showing the "submitted" text
      //Alert.alert("Submited");
      
      
      const configuration = {
      method: "PUT",
      url: ip.ipAdress+"/editPhone",
      data: {
        phone,
      },
      };

      axios(configuration)
      .then((result) => {console.log("Phone changed");           
        navigation.navigate('profile')})
      .catch((error) => {console.log("Phone has not changed"); }) 
      
    }

    
    
/*------------------------------------------------------------------------------*/


  return (
        
    <View style={{height:"100%", backgroundColor: '#fff', flexDirection:'column', flex:1 }}  onSubmit={(e) => {handleSubmit(onSubmit)(e)}}>
      <StatusBar 
          barStyle="dark-content"
          hidden= {false}
          backgroundColor ="#fff" 
      />

      

          <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
           

            {/* ----------------------- Forgot Password Data ----------------------------- */}
         
          <Text style = {{fontWeight: '500', fontSize: 25, marginLeft :15, marginTop: 15}}> Edit your phone number!</Text>            
          <Text style = {styles.txt}> Enter your phone number</Text>
          <View style = {styles.formContainer}>
            <Icon name='phone' size={22} color="#818181"/>
            <TextInput 
            secureTextEntry
              autoCapitalize='none'
              style = {styles.input} 
              placeholder= "Phone number"
              placeholderTextColor="#818181"
              name={phone}
              value={phone}
              onChangeText = {setPhone}
            />
                        
           </View>

         

           <View style = {{ flex: 1, justifyContent:'flex-end', flexDirection:'column'}}>
              <View style = {{flexDirection: 'row', justifyContent:'space-around'}}>

                  <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('profile')}> 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', marginTop: 15, marginLeft:10}}>Back to profile</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.send} onPress={(e) => handleSubmit(e)} disabled  = {phone? false : true }   >
                       <Text style={styles.sendTxt} >Send</Text>
                  </TouchableOpacity>
              </View>
           </View>
            
             
          </View>
                 
      
    </View>
)
};

EditPhoneScreen.navigationOptions = () => {
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
      marginLeft: 20
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
       marginBottom: 0,
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
  
export default EditPhoneScreen;
import { Alert, View,Text,Image, StyleSheet ,Button, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const codeSignUpConfirmation = ({navigation}) => {

    return(
        <View style={styles.container}
              onSubmit={(e) => {handleSubmit(onSubmit)(e)}}>

          <StatusBar 
            barStyle="dark-content"
            hidden= {false}
            backgroundColor ="#fff" 
          />        
         <View style= {{flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'center', marginTop: 80}}>
            {/*  <Image source={require('../../assets/images/logo2.png')} style={{ height: 250, width:250}}/> */}
              
             <Text style= {styles.text2}> Welcome to Ordear</Text>
             <Text style= {styles.text}> Please confirm your adress email and let the good food roll !</Text>
              
              <View style ={{flex:1, flexDirection:'column', justifyContent:'flex-end', alignContent:'center',}}>
                <TouchableOpacity style={styles.press}  onPress={() => navigation.navigate('Login')}  >
                  <Text style={styles.pressTxt} > Login</Text>
                </TouchableOpacity>

         </View>
         </View>
        </View>
    )

};

codeSignUpConfirmation.navigationOptions = () => {
    return {
      headerShown: null,    
    };
  };

const styles= StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: '#fff',
        flexDirection:'column',
        alignItems: 'center',
        width:"100%",
        justifyContent: 'center',        
    },

    text: {
        maxWidth: '80%',
        color:'#999',
        fontSize:18,
        textAlign:'center', 
        padding:10
        
    },
    text2: {
      fontSize: 30,
      alignSelf:'flex-start',
      marginTop: 30
      
  },
    press:{
      
        justifyContent:'center',
        width:300,
        backgroundColor:"#FF1717",
        height:50,
        marginBottom:20,
        borderRadius:10,
      },
      pressTxt:{
        fontSize:15,
        letterSpacing:1.5,
        textAlign:'center',
        position:'relative',
        color:"#fff"
      },
});

export default codeSignUpConfirmation;
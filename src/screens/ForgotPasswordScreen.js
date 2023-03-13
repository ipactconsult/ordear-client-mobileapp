import React , {useState} from "react"
import { TextInput, ToastAndroid, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import ipAdress from '../constants/cte'
import axios from 'axios';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail]= useState('');

    /*------------------------- liaison avec back ------------------------------------ */
    const handleSubmit = (e) => {
        
        e.preventDefault();

        const configuration = {
        method: "put",
        url: ip.ipAdress+"/forgotPassWithcode",
        data: {
           email,
        },
        };

        axios(configuration)
        .then((result) => {console.log("Email sent");           
          navigation.navigate('verifPassCodeScreen')})
        .catch((error) => {console.log("Email not sent !");  ToastAndroid.show('Email not sent ', ToastAndroid.LONG); }) 
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
            
                    
              <Text style = {{fontWeight: '500', fontSize: 25, marginLeft :15, marginTop: 15}}> What's your email adress ?</Text>
              <Text style = {styles.txt}> Enter the email adresse associated to your account</Text>

              <View style = {styles.formContainer}>
                <Icon name='envelope-o' size={22} color="#818181"/>
                <TextInput 
                  autoCapitalize='none'
                  style = {styles.input} 
                  placeholder= "Enter your adresse email here ..."
                  placeholderTextColor="#818181"
                  name={email}
                  value={email}
                  onChangeText = {setEmail}
                /> 

                </View>     

                <View style = {{ flex: 1, justifyContent:'flex-end', flexDirection:'column'}}>
                   <View style = {{flexDirection: 'row', justifyContent:'space-around'}}>

                      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Login')}> 
                            <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', marginTop: 15, marginLeft:10}}>Back to sign In</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.send} onPress={(e) => handleSubmit(e)}  disabled  = {email? false : true } >
                            <Text style={styles.sendTxt} >Send</Text>
                      </TouchableOpacity>

                    
                   </View>
                </View>                  
              
        </View>
    )
};

ForgotPasswordScreen.navigationOptions = () => {
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
  

export default ForgotPasswordScreen;


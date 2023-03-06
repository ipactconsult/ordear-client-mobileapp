import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { ToastAndroid, Alert, View,Text,Image, StyleSheet ,Button, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import google from '../../assets/images/google.png';
import fb from '../../assets/images/fb.png';
import React, {useState} from 'react';
import Checkbox from "expo-checkbox";
import axios from 'axios';
import { sub } from 'react-native-reanimated';

const InscrireScreen = ({navigation}) => {

  const [username, setUsername]= useState('');
  const [phone, setPhone]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(''); 
  const [inscrire, setInscrire] = useState(false);

  const [agree, setAgree] = useState(false);

  /* ------------------------ liaison avec le back --------------------------------*/
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    //Alert.alert("Submited");
   // e.navigation.navigate('Account');
  
    const configuration = {
      method: "post",
      url: "http://192.168.1.11:5000/api/register",
      data: {
        username,
        phone,
        email,
        password,
        passwordVerify,
      },
    };

    axios(configuration)
     .then((result) => {
       console.log("user registered !");
       //confirmEmail(email, password);
       navigation.navigate('signUpConfirmation')
      })
     .catch((error) => {console.log("user not registered !")});
  }
 /* ------------------------ FIN liaison avec le back --------------------------------*/
  return(
   <ScrollView>
     <View style = {styles.container}> 
       <StatusBar 
         barStyle="dark-content"
         hidden= {false}
         backgroundColor ="#fff" 
       />

       {/* SignUp form Section*/}
      <View style = {styles.loginContainer}>        

        <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>  
         <Text style={{fontSize: 30, color: "#333", marginTop:10}}> SignUp</Text>        
        </View>

         <Text style= {styles.text}> Delicious Food, Great Day !</Text>  
         

        <View style = {{flexDirection:'column', paddingTop: 20 }}
              onSubmit={(e) => {handleSubmit(onSubmit)(e)}}
              >

       <View style={{flexDirection:'row'}}>
        
       <View style = {styles.formContainer2}>
           <Icon name='user-o' size={22} color="#818181" />
           <TextInput 
             autoCapitalize= "none"
             autoCorrect={false}
             style = {styles.input} 
             placeholder= "Name"
             placeholderTextColor="#818181"
             name={username}
             value={username}
             onChangeText = {setUsername}
             
           />
         </View>

         <View style = {styles.formContainer3}>

           <Icon name='phone' size={22} color="#818181"/>
           <TextInput 
             keyboardType='phone-pad'
             autoCapitalize= "none"
             autoCorrect={false}
             style = {styles.input} 
             placeholder= "Phone"
             placeholderTextColor="#818181"
             name={phone}
             value={phone}
             onChangeText = {setPhone}
             
           />
         </View>
       </View>
        

         <View style = {styles.formContainer}>
           <Icon name='envelope-o' size={22} color="#818181"/>
           <TextInput 
             keyboardType='email-address'
             autoCapitalize= "none"
             autoCorrect={false}
             style = {styles.input} 
             placeholder= "Email"
             placeholderTextColor="#818181"
             name={email}
             value={email}
             onChangeText = {setEmail}
             
           />
         </View>
         <View style = {styles.formContainer}>
          <Icon name='lock' size={22} color="#818181"/>
           <TextInput 
            autoCapitalize= "none"
            autoCorrect={false}
             secureTextEntry
             style = {styles.input} 
             placeholder= "Password"
             placeholderTextColor="#818181"
             name={password}
             value={password}
             onChangeText = {setPassword}
           />
         </View>

         <View style = {styles.formContainer}>
          <Icon name='check-circle-o' size={22} color="#818181"/>
           <TextInput 
            autoCapitalize= "none"
            autoCorrect={false}
             secureTextEntry
             style = {styles.input} 
             placeholder= "Confirm password"
             placeholderTextColor="#818181"
             name={passwordVerify}
             value={passwordVerify}
             onChangeText = {setPasswordVerify}
           />
         </View>    

        <View style ={{flexDirection: 'column'}}>
            <View style={styles.wrapper} >
                <Checkbox style= {styles.check}
                    value= {agree}
                    onValueChange={() => setAgree(!agree)}
                    color= {agree? 'red': undefined}     
              />
              <Text>I accept the </Text>

              <TouchableOpacity onPress={()=> termsAlert()}> 
                <Text style= {{
                  marginLeft:1,
                  color:'red',
                  textDecorationLine: 'underline'
              }}>terms</Text>
            </TouchableOpacity>

            <Text>, </Text> 

            <TouchableOpacity onPress={() => privacyAlert()}> 
                <Text style= {{
                  marginLeft:1,
                  color:'red',
                  textDecorationLine: 'underline'
              }}>privacy</Text>
            </TouchableOpacity>

            <Text> and </Text>        
            <TouchableOpacity onPress={() => cookiesAlert()}> 
                <Text style= {{
                  marginLeft:1,
                  color:'red',
                  textDecorationLine: 'underline'
              }}>cookies policy</Text>
            </TouchableOpacity>  
       
          </View>
       
        </View>
    {/*inscrire ? <Text> Registered Successfully</Text> :<Text> You are not registered</Text>*/ }
    
    {/*onPress={() => navigation.navigate('Account')}*/}
         
         <TouchableOpacity style={styles.press} 
                              disabled = {agree? false : true}
           onPress= {(e) => handleSubmit(e)} >
            <Text style={styles.pressTxt} >
              Sign Up</Text>              
         </TouchableOpacity>

        </View>

       {/* Social login Section*/}
       <View style = {styles.socialContainer}> 
        <Text style= {styles.Or}>Or </Text> 

        <View style = {styles.apps}>
          <TouchableOpacity  style = {styles.touchable}>
            <Image source = {google} style= {{height: 30, width: 30,marginLeft:10,}} />

            <Text style = {styles.txtTouchable}> Sign Up with Google</Text>
          </TouchableOpacity>

         <TouchableOpacity  style = {styles.touchable}>
            <Image source = {fb} style= {{height: 30, width: 30,marginLeft:10,}} />

            <Text style = {styles.txtTouchable}>  Sign Up with Facebook</Text>
          </TouchableOpacity>
        </View>       

      
       <View style = {styles.signup}>
          <Text style={styles.textSignUp}> You have an account ?</Text>
          <TouchableOpacity
           onPress={() => navigation.navigate('Login')}> 
           <Text style= {{fontSize: 16, color: "#333",textDecorationLine: 'underline', }}> SignIn !</Text>
          </TouchableOpacity>
          
        </View>
        
       </View>

      </View>
  </View>
   </ScrollView>
  )

}



const termsAlert=() => {
  Alert.alert('Terms of service',
   '\n By using this app, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the app accordingly. IPACT only grants use and access of this app, its products, and its services to those who have accepted its terms \n\n As a user of this app, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password '
   );
};

const privacyAlert=() => {
  Alert.alert('Privacy Policy', 
  '\n By using this app, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the app accordingly. IPACT only grants use and access of this app, its products, and its services to those who have accepted its terms \n\n As a user of this app, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password ' 
  );
}
const cookiesAlert=() => {
  Alert.alert('Cookies Policy',
  '\n By using this app, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the app accordingly. IPACT only grants use and access of this app, its products, and its services to those who have accepted its terms \n\n As a user of this app, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password '
  );
}



InscrireScreen.navigationOptions = () => {
  return {
    headerShown: null,    
  };
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection:'column',
    alignItems: 'center',
    paddingLeft: 10,
    marginLeft:2,
    height:"100%",
    width:"100%"
  },

  loginContainer: {
   flex:2,
   flexDirection: 'column',
   backgroundColor:"#fff",
   //paddingTop: 10,
   paddingHorizontal:'5%',
   width:"100%"
  },

  socialContainer:{
   flex:2,
   flexDirection: 'column',
   backgroundColor:"#fff",
   paddingHorizontal: "3%",
  },
  text: {
    color: "#5E5E5E",
    marginLeft: 5,
    fontSize: 15,
    paddingTop: 5
  },

  formContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"#ededed",
    width:"95%",
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    marginTop:5,
    marginBottom: 10
  },

  formContainer2:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"#ededed",
    width:"45%",
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    marginRight:10,
    marginTop:5,
    marginBottom: 10
  },
  formContainer3:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"#ededed",
    width:"45%",
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    marginTop:5,
    marginBottom: 10
  },

  input: {
    position: 'relative',
    height:'100%',
    width:'95%',
    paddingLeft: 20

  },


 press:{
  justifyContent:'center',
  width:'95%',
  backgroundColor:"#FF1717",
  height:50,
  marginBottom:20,
  borderRadius:10,
  marginTop: 10,
  
},
pressTxt:{
  fontSize:15,
  letterSpacing:1.5,
  textAlign:'center',
  position:'relative',
  color:"#fff"
},

/* ----- Social login Section -----*/
Or: {
  textAlign: 'center',
  marginVertical: 5,
  color:"#818181",
  fontSize: 20,
  fontWeight:'bold',
},

apps:{
  flexDirection: 'column',
  alignItems:'center',
  width:"95%",
},

touchable:{
  height: 50, 
  width: '100%',
  borderWidth: 1,
  borderRadius: 10,
  borderColor: "#747373",
  flexDirection:'row',
  alignItems:'center',
  marginBottom: 20

},

txtTouchable: {
  fontSize: 17,
  marginLeft: 5,
  width: '80%',
  textAlign: 'center'
},

 /* ----------- go to signIn -----------------*/
signup: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems:'flex-end',
   backgroundColor:'#fff',
   marginTop:40
   
},
textSignUp: {
  fontSize: 15,
  color: "#818181"
},
wrapper: {
  flexDirection: 'row',
  paddingTop: 30,
  marginLeft: 10,
  marginBottom:10,
},

check: {
  marginRight:8,
},

});

export default InscrireScreen;


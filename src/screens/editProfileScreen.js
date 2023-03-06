import React , {useState} from "react"
import {TextInput,ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity, } from "react-native"
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

const editPorfileScreen  = ({navigation}) => {

    const [avatar, setAvatar ]= useState('');
    const [username, setUsername ]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail ]= useState('');
    const [adresse, setAdresse ]= useState('');
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
    const [image, setImage] = useState(''); 
    const [address, setAdress] = useState(''); 
    const [role, setRole ]= useState(''); 

    return (

        <View>
            <StatusBar 
                barStyle="dark-content"
                hidden= {false}
                backgroundColor ="#fff" 
            /> 
            <View style ={{ height: 50, backgroundColor: '#fff', flexDirection:'row', justifyContent:'space-around', shadowOpacity:100,
                              elevation:15}}>

                <TouchableOpacity style ={styles.txt} onPress ={() => navigation.navigate('Profile')}>
                     <Text> cancel </Text>
                </TouchableOpacity>             
                
                
                <Text style ={styles.txt}> Edit profile </Text> 

                <TouchableOpacity style ={styles.txt}>
                     <Text> Save </Text>
                </TouchableOpacity>   
            </View>

           <ScrollView>
           <View style ={{ flexDirection:'column', justifyContent:'center'}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200, }}>
                        <Image source={require('../../assets/images/woman.png')} 
                            style={{width:150, height:150, borderRadius:100, marginTop:30 }} >
                        </Image>                       
                </View>

                {/* ----------------- Inputs -------------------------------------- */}

                <View style={{flexDirection:'column', justifyContent:'center', width: '80%', alignSelf:'center', marginTop: 60}}>
                    <Input
                        placeholder='Touil Safa'
                        leftIcon={
                            <Icon
                            name='user-o'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
                    />
                     <Input
                        placeholder='Montrel, Canada'
                        leftIcon={
                            <Icon
                            name='address-book-o'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
                    />
                     <Input
                        placeholder='Femme'
                        leftIcon={
                            <Icon
                            name='venus-mars'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
                    />
                     <Input
                        placeholder='20/07/1998'
                        leftIcon={
                            <Icon
                            name='calendar'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
                    />

                   
                   {/* <Text style ={styles.txt}> Security</Text>

                    <Input
                        placeholder='+1 29534057'
                        leftIcon={
                            <Icon
                            name='mobile'
                            size={24}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={email}
                    />
                    */}


                </View>    
           
            </View>
           </ScrollView>
        </View>
        
    );

};

editPorfileScreen.navigationOptions = () => {
    return {
      headerShown: null,    
    };
};

const styles = StyleSheet.create({

    txt: {        
        marginTop:15
    },

    send:{
        justifyContent:'center',
        alignSelf:'center',
        width:'95%',
        backgroundColor:"#FF1717",
        height:50,
        borderRadius:10,
        marginTop: 0,
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

export default editPorfileScreen;
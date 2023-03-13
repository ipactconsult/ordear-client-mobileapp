import React , {useState, useEffect} from "react"
import {ToastAndroid, TextInput,ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity, } from "react-native"
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import ipAdress from '../constants/cte'

const editPorfileScreen  = ({navigation}) => {

    const [avatar, setAvatar ]= useState('');
    const [firstName, setFisrtName ]= useState('');
    const [lastName, setLastName ]= useState('');
    const [phone, setPhone]= useState('');
    const [adresse, setAdresse ]= useState('');
    const [genre, setGenre] = useState(''); 
    const [birthday, setBirthday ]= useState(''); 

    const  [client , setUser ]=useState({});


    /*------------------------- liaison avec back : GET------------------------------------ */
    useEffect(()=>{   
      
           axios.get(ip.ipAdress+'/viewProfile').then((res)=>{
              // console.log(res)
               setUser(res.data[0])
           })

   },[client])
    /*------------------------------------------------------------------------------*/

    /* --------------------------Edit profile ---------------------------------------------- */
    const handleSubmit = (e) => {

            e.preventDefault();            
            
            const configuration = {
            method: "PUT",
            url: ip.ipAdress+"/editProfile",
            data: {
                firstName: firstName || client.firstName,
                lastName: lastName || client.lastName,
                adresse: adresse || client.adresse, 
                birthday: birthday || client.birthday,
               //genre,           
                
            },
            };
    
            axios(configuration)
            .then((result) => {console.log("User data changed");           
            navigation.navigate('profile')})
            .catch((error) => {
                console.log("User data has not changed");
                ToastAndroid.show('Profile not changed ', ToastAndroid.LONG);
            }) // 
            
      }

    return (

        <View style = {styles.container} onSubmit={(e) => {handleSubmit(onSubmit)(e)}}>
            <StatusBar 
                barStyle="dark-content"
                hidden= {false}
                backgroundColor ="#fff" 
            /> 
          
           <View style ={{ flexDirection:'column', justifyContent:'center'}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200, }}>
                        <Image source={require('../../assets/images/woman.png')} 
                            style={{width:110, height:110, borderRadius:100, marginTop:50 }} >
                        </Image>                       
                </View>

                {/* ----------------- Inputs -------------------------------------- */}

                <View style={{flexDirection:'column', justifyContent:'center', width: '80%', alignSelf:'center', marginTop: 60}}>
                    <Input
                        placeholder={client.firstName}
                        leftIcon={
                            <Icon
                            name='user-o'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={firstName}
                        onChangeText={setFisrtName}
                    />

                    <Input
                        placeholder={client.lastName}
                        leftIcon={
                            <Icon
                            name='user-o'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={lastName}
                        onChangeText= {setLastName}
                    />
                    
                     <Input
                        placeholder={client.adresse}
                        leftIcon={
                            <Icon
                            name='address-book-o'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input}
                        value={adresse}
                        onChangeText= {setAdresse}
                    />
                    <Input
                        placeholder={client.birthday}
                        leftIcon={
                            <Icon
                            name='calendar'
                            size={18}
                            color='black'
                            />
                        }
                        style = {styles.input} 
                        value={birthday}
                        onChangeText={setBirthday}
                    />
                    
                     
                </View>  

                {/*----------------------------------------------------------------- */}

           </View>

            <View style = {{ flex: 1, justifyContent:'flex-end', flexDirection:'column'}}>
              <View style = {styles.viewBar}>

                <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('profile')}> 
                        <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', marginTop: 8, marginLeft:10}}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}> 
                        <Text style= {{fontSize: 14, color: "#818181" , fontWeight:'400', marginTop: 8, marginLeft:10}}>Edit profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable} onPress={(e) => handleSubmit(e)}> 
                        <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', marginTop: 8, marginLeft:10}}>Save</Text>
                </TouchableOpacity>

              </View>
            </View>
           
        </View>
        
    );

};

editPorfileScreen.navigationOptions = () => {
    return {
      headerShown: null,    
    };
};

const styles = StyleSheet.create({
    container: {
        height:'100%', 
        backgroundColor: '#F3F3F3', 
        flex: 1, 
        flexDirection:'column' ,
        
      },
    txt: {        
        marginTop:15
    },

    viewBar :{
        flexDirection: 'row', 
        justifyContent:'space-around',
        height: 40,
        backgroundColor:'#F3F3F3',
        shadowOpacity:500,
        elevation:15,
      
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
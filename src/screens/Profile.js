import React , {useState} from "react"
import { ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';

const Profile = ({navigation}) => {

    /*------------------------- liaison avec back ------------------------------------ */
   /* const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        //Alert.alert("Submited");
        

        const configuration = {
        method: "post",
        url: "http://192.168.1.11:5000/api/logout",
        data: {
           email
        },
        };

        axios(configuration)
        .then((result) => {console.log("user déconnecté"); 
        
        navigation.navigate('Login')})
        .catch((error) => {console.log("Logout failed"); }) 
    }*/
    /*------------------------------------------------------------------------------*/
    

    return (
        
        <View style={{height:1000, backgroundColor: '#FF1717' }}>
            <StatusBar 
                barStyle="light-content"
                hidden= {false}
                backgroundColor ="#FF1717" 
             />

          
                <View style={{padding:10, width:'100%', backgroundColor: '#FF1717', height:150, /*borderBottomRightRadius: 40, borderBottomLeftRadius: 40*/}}>
                           
                </View>

              <View style={{padding:10, width:'100%', backgroundColor: '#fff', flex: 1, height:2000, flexDirection:'column', borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
                <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                    <Image source={require('../../assets/images/woman.png')} 
                         style={{width:140, height:140, borderRadius:100, marginTop:-70 }} >
                    </Image>

                    <View style={{flexDirection:'row'}}>                      
                      <Text style={{fontSize:25, fontWeight:'bold', padding:10, color:'#000',marginLeft: 20}}> Touil Safa</Text>
                      <Icon name='pencil' size={16} color="#818181" style={{padding:20, marginLeft: -20}} onPress={() => navigation.navigate('edit') }/>
                    </View>                       
                   
                </View>

                {/* ----------------------- User Data ----------------------------- */}
                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>

                    <Icon name='envelope-o' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>safa.touil@esprit.tn</Text>
                </View>

                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>
                    <Icon name='phone' size={22} color="#818181"/>

                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>+1 305 453 1600</Text>
                </View>

                <View style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                              width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                              elevation:15, marginTop:20, marginBottom:20
                             }}>
                   <Icon name='address-book-o' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>Montreal, Canada</Text>
                </View>

                 <View style={{flexDirection: 'column', alignItems:'flex-end'}}>
                 <TouchableOpacity onPress={() => navigation.navigate('Login')/*(e) => handleSubmit(e)*/} style={{alignSelf:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#fff',
                                   width:'90%',padding:20, paddingBottom:22,borderRadius:10, shadowOpacity:80,
                                   elevation:15, marginTop:20, marginBottom:20,backgroundColor:'#FF1717'
                                   }}>
                        
                    <Text style={{fontSize:15, color:'#fff', fontWeight:'blod'}}>Logout</Text>
                </TouchableOpacity>   
                 </View>   
                </View>
                     
           
        </View>
    )
};

Profile.navigationOptions = () => {
    return {
      headerShown: null,    
    };
  };


export default Profile


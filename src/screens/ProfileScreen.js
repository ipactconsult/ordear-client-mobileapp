import React , {useEffect,useState} from "react"
import { ScrollView, StyleSheet, Text, View,StatusBar,Image,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';
import ipAdress from '../constants/cte'

const Profile = ({navigation}) => {

  const  [client , setUser ]=useState({})


    /*------------------------- liaison avec back ------------------------------------ */
    useEffect(()=>{   
      
           axios.get(ip.ipAdress+'/viewProfile').then((res)=>{
              // console.log(res)
               setUser(res.data[0])
           })

   },[client])

   const logout = () => {
    const configuration = {
        method: "get",
        url: ip.ipAdress+"/logout",
        data: {
        },
        };
  
        axios(configuration)
        .then((result) => {console.log("Logout");           
          navigation.navigate('Login')})
        .catch((error) => {console.log("Logout failed"); }) 
        
}
    /*------------------------------------------------------------------------------*/
    

  return(
    <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content"
                hidden= {false}
                backgroundColor ="#F3F3F3" 
             />

            <ScrollView>
            <View style={{alignItems:'center', borderTopLeftRadius: 200}}>
                    <Image source={require('../../assets/images/woman.png')} 
                         style={{width:110, height:110, borderRadius:100, marginTop:40 }} >
                    </Image>

                    <View style={{flexDirection:'row'}}>                      
                      <Text style={styles.name}> {client.firstName} {client.lastName}</Text>
                      <Icon name='pencil' size={16} color="#818181" style={{padding:20, marginLeft: -20}} onPress={() => navigation.navigate('edit') }/>
                    </View>                      
              </View>

              <View style={styles.viewEmail}>
                    <Icon name='envelope-o' size={22} color="#818181"/>
                    <Text style={styles.textEmail}>{client.email}</Text>
              </View>

              <View style={styles.viewEmail}>
                    <Icon name='phone' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>{client.phone}</Text>
              </View>

            {/*  <View style={styles.viewEmail}>
                    <Icon name='map-marker' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>{client.adresse}</Text>
              </View> */}
              
              <View style={styles.viewEmail}>
                    <Icon name='address-book-o' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>{client.adresse}</Text>
              </View>

              <View style={styles.viewEmail}>
                    <Icon name='calendar' size={22} color="#818181"/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10}}>{client.birthday}</Text>
              </View>

              <View style={{flexDirection: 'column', alignItems:'flex-end'}}>
                 <TouchableOpacity onPress={() => logout()/*(e) => handleSubmit(e)*/} style={styles.logout}>
                        
                    <Text style={{fontSize:15, color:'#fff', fontWeight:'blod'}}>Logout</Text>
                </TouchableOpacity>   
                 </View>   

              

            </ScrollView>

            {/* ************************************* BAR ************************************* */}

            <View style = {{ flex: 1, justifyContent:'flex-end', flexDirection:'column'}}>

              <View style = {styles.viewBar}>

              <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('editPassword')}> 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', marginTop: 8, marginLeft:10}}>Edit password</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('editPhone')}> 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', marginTop: 8, marginLeft:10}}>Edit phone</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.touchable} > 
                    <Text style= {{fontSize: 14, color: "#818181" , fontWeight: 'bold', marginTop: 8, marginLeft:10}}>Profile</Text>
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


const styles = StyleSheet.create ({
  container: {
    height:1000, 
    backgroundColor: '#F3F3F3', 
    flex: 1, 
    flexDirection:'column' ,
    
  },
  name:{
    fontSize:22, fontWeight:'bold', padding:10, color:'#000',marginLeft: 20
  },

  viewEmail: {
    alignSelf:'center',
    flexDirection:'row', 
    justifyContent:'flex-start', 
    backgroundColor:'#fff',
    width:'80%',
    padding:20, 
    paddingBottom:20,
    borderRadius:10, 
    shadowOpacity:50,
    elevation:8, marginTop:20, marginBottom:20,
    
  },
  textEmail :
  {
    fontSize:15, color:'#818181', fontWeight:'blod', marginLeft: 10
  },
 
  viewBar :{
    flexDirection: 'row', 
    justifyContent:'space-around',
    height: 40,
    backgroundColor:'#F3F3F3',
    shadowOpacity:500,
    elevation:15,
  
},
logout:
{
  alignSelf:'center', 
  flexDirection:'row', 
  justifyContent:'center',
  backgroundColor:'#fff',
  width:'80%',
  padding:20, 
  paddingBottom:22,
  borderRadius:10, 
  shadowOpacity:80,
  elevation:2, 
  marginTop:10, 
  marginBottom:0,
  backgroundColor:'#FF1717'
}
})

export default Profile;

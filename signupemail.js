import React, { Component } from 'react';
import {Image, Text, Alert, Button, View, StyleSheet, TouchableOpacity ,ImageBackground,TextInput} from 'react-native';
import backgroundImage from "./src/bg.jpg";
//import TextInput from 'react-native-material-textinput'

import icongoogle from "./src/assets/image/google.png";
import iconfacebook from "./src/assets/image/fb.png";
import iconemail from "./src/assets/image/mail.png";
import iconcamera from "./src/assets/image/camera.png";
import { color } from 'react-native-reanimated';
export default class signupemail extends Component {



    _openDetail() {
        this.props.navigation.navigate('phoneconfirmationone')
      }
    

    render() {
        return(
        // <ImageBackground source={backgroundImage} style={styles.backgroundImagenew}>
    
       
        <View style = { styles.MainContainer }>  
               
        <View style={styles.containerTop}>
            
        <Text style={styles.headingstyleFirstname}>First name: </Text>
        
        <TextInput 
placeholder="Enter First name"
      style={{height: 50 ,width: 350 ,borderColor: 'gray', borderWidth: 1  , marginTop: 10 , borderRadius: 5 , padding: 10}}
    
    />
 
        <Text style={styles.headingstylelastname}>Last name: </Text>
       
        <TextInput 
placeholder="Enter Last name"
      style={{height: 50 ,width: 350 ,borderColor: 'gray', borderWidth: 1  , marginTop: 10 , borderRadius: 5 , padding: 10}}
    
    />

        <Text style={styles.headingstyleemail}>Email: </Text>
        
        <TextInput 
placeholder="Enter Email"
      style={{height: 50 ,width: 350 ,borderColor: 'gray', borderWidth: 1  , marginTop: 10 , borderRadius: 5 , padding: 10}}
    
    />
        <Text style={styles.headingstylePassword}>Password: </Text>
        <Text style={styles.headingstylealert}>*The password mysr be of leht bigger than 8 and contain at least 1 upper case,1 number,and 1 secal character</Text>
        <TextInput 
placeholder="Enter Password"
      style={{height: 50 ,width: 350 ,borderColor: 'gray', borderWidth: 1  , marginTop: 10 , borderRadius: 5 , padding: 10}}
    
    />
        <Text style={styles.headingstyleRepeatPassword}>Reapeat password: </Text>
        
        <TextInput 
placeholder="Enter Reapeat password"
      style={{height: 50 ,width: 350 ,borderColor: 'gray', borderWidth: 1  , marginTop: 10 , borderRadius: 5 , padding: 10}}
    
    />
        

        </View>
    
       
       

   

    <View style={ styles.bottomView} >
      
    

<View style={{backgroundColor: '#fff' , width:'100%' , flex: 1 , justifyContent: 'center',alignItems: 'center'}}>
<TouchableOpacity  onPress={this._openDetail.bind(this)}>
<View style={{ backgroundColor:"#000" , width: 150,height: 60 ,justifyContent:"center",textAlign: "center" , borderRadius: 10 ,marginTop: 14}}>
<Text style={{ color:"#ffffff",textAlign: "center", justifyContent:"center",  alignItems:"center",fontSize: 25}}>NEXT</Text>
</View>

</TouchableOpacity>
    </View>



</View>



</View>


  



       
      
      )
      }
    }
    
    const styles = StyleSheet.create({

        input: {
        width: 325,
        // height: 44,
        // padding: 10,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 
           
          },

      MainContainer:
      {
          flex: 1,
          alignItems: 'center',
           //justifyContent: 'center',
          width: "100%",
     
          marginTop: 70,
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      },
      headingstyleFirstname:
        {marginRight: 5,
            marginTop: 20,
            paddingRight:210,
            fontSize: 22,
            color:'black',
            fontWeight: 'bold',
        },

        headingstylelastname:
        {marginRight: 5,
            marginTop: 20,
            paddingRight:210,
            fontSize: 22,
            color:'black',
            fontWeight: 'bold',},
            headingstyleemail:
            {
                marginRight: 5,
                marginTop: 20,
                paddingRight:260,
                fontSize: 22,
                color:'black',
                fontWeight: 'bold',
            },

       
        headingstylePassword:
        {
            marginRight: 5,
            marginTop: 20,
            paddingRight:215,
            fontSize: 22,
            color:'black',
            fontWeight: 'bold',

        },
        headingstyleRepeatPassword:
        {
            marginRight: 5,
            marginTop: 20,
            paddingRight:130,
            fontSize: 22,
            color:'black',
            fontWeight: 'bold',

        },
        
        headingstylealert: {
            paddingLeft:40,
            fontSize: 10,
            color:'#D4002C',
            fontWeight: 'bold',
        },
       

     
      containerTop: {
        
          //marginBottom: 150,
          marginTop: 0,
          justifyContent: "center",
          alignItems: "center"
      },
     
   

    bottomView:{
 
      width: '100%', 
      height: 150, 
      backgroundColor: 'blue', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
 
  
       

    
     
    
    
    
    
      
    });
    
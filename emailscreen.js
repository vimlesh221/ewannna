import React, { Component } from 'react';
import {Image, Text, Alert, Button, View, StyleSheet, TouchableOpacity ,ImageBackground,TextInput} from 'react-native';
import backgroundImage from "./src/bg.jpg";
//import TextInput from 'react-native-material-textinput'

import icongoogle from "./src/assets/image/google.png";
import iconfacebook from "./src/assets/image/fb.png";
import iconemail from "./src/assets/image/mail.png";
import iconcamera from "./src/assets/image/camera.png";
import { color } from 'react-native-reanimated';
export default class emailscreen extends Component {

  _openDetail() {
    this.props.navigation.navigate('signupemail')
  }


  

    render() {
        return(
        // <ImageBackground source={backgroundImage} style={styles.backgroundImagenew}>
    
       
        <View style = { styles.MainContainer }>  
               
        <View style={styles.containerTop}>
            
        <Text style={styles.headingstyle}>Introduce you email: </Text>
        <Text style={styles.headingstyletwo}>*This email does not belong to any ewanna account</Text>
        
     
<TextInput 
placeholder="Enter the email"
      style={{height: 50 ,width: 350 ,borderColor: 'gray', borderWidth: 1  , marginTop: 10 , borderRadius: 5 , padding: 10}}
    
    />
       
    
 
        <Text style={styles.headingstylethree}>Password: </Text>
        <Text style={styles.headingstylefour}>*Wrong password attempt 2 of 3 before the cooldown</Text>

       
<TextInput 
placeholder="Enter Password"
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

      

      MainContainer:
      {
          flex: 1,
          alignItems: 'center',
           //justifyContent: 'center',
          width: "100%",
     
          marginTop: 70,
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      },
      headingstyle: {
        marginRight: 5,
        marginTop: 100,
        paddingRight:120,
        fontSize: 22,
        color:'black',
        fontWeight: 'bold',
    },

         headingstyletwo: {
            fontSize: 13,
            color:'#D4002C',
            fontWeight: 'bold',
        },
        headingstylethree: {
        marginRight: 5,
        marginTop: 20,
        paddingRight:210,
        fontSize: 22,
        color:'black',
        fontWeight: 'bold',
        },
        headingstylefour: {
            fontSize: 13,
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
      height: 200, 
      backgroundColor: 'blue', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
 
  
       

    
     
    
    
    
    
      
    });
    
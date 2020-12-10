import React, { Component } from 'react';
import {Image, Text, Alert, Button, View, StyleSheet, TouchableOpacity ,ImageBackground ,TextInput} from 'react-native';
import backgroundImage from "./src/bg.jpg";
// import TextInput from 'react-native-material-textinput'

import icongoogle from "./src/assets/image/google.png";
import iconfacebook from "./src/assets/image/fb.png";
import iconemail from "./src/assets/image/mail.png";
import iconcamera from "./src/assets/image/camera.png";
import { color } from 'react-native-reanimated';
export default class phoneconfirmationone extends Component {

  _openDetail() {
    this.props.navigation.navigate('phoneconfirmationtwo')
  }

    render() {

   
        return(
            
        // <ImageBackground source={backgroundImage} style={styles.backgroundImagenew}>
    
       
        <View style = { styles.MainContainer }>  
               
        <View style={styles.containerTop}>
            
        <Text style={styles.headingstyle}>What is your phone number ?</Text>
        <Text style = {styles.subtext}>*We need to confirm your phone number for both security reasons and to help you get in touch with
        the other users of the platform. 
        This information will only be shown to the other users once you have an ongoing transaction with them.</Text>
        
        {/* <View style={styles.input}>
        
        </View> */}

<TextInput
      style={{height: 50 ,width: 350 ,borderColor: 'gray', borderWidth: 1  , marginTop: 10}}
    
    />
 
        

   
<TouchableOpacity  onPress={this._openDetail.bind(this)}>
<View style={{ backgroundColor:"#000" , width: 150,height: 60 ,justifyContent:"center",textAlign: "center" , borderRadius: 10 ,marginTop: 14}}>
<Text style={{ color:"#ffffff",textAlign: "center", justifyContent:"center",  alignItems:"center",fontSize: 25}}>Send code via SMS</Text>
</View>

</TouchableOpacity>
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
      headingstyle: {
         marginRight: 70,
        marginTop: 100,
        // paddingRight:120,
        fontSize: 22,
        color:'black',
       
       // fontWeight: 'bold',
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

        subtext: {
            marginLeft: 30,
            fontSize: 10,
           
        },
       

     
      containerTop: {
        
          //marginBottom: 150,
          marginTop: 0,
          justifyContent: "center",
          alignItems: "center"
      },
     
   

    
    
    
    
      
    });
    
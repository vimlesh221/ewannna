import React, { Component } from 'react';
import {Image, Text, Alert, Button, View, StyleSheet, TouchableOpacity ,ImageBackground ,TextInput} from 'react-native';
import backgroundImage from "./src/bg.jpg";
// import TextInput from 'react-native-material-textinput'

import icongoogle from "./src/assets/image/google.png";
import iconfacebook from "./src/assets/image/fb.png";
import iconemail from "./src/assets/image/mail.png";
import iconcamera from "./src/assets/image/camera.png";
import { color } from 'react-native-reanimated';
export default class phoneconfirmationtwo extends Component {


    render() {

   
        return(
            
        // <ImageBackground source={backgroundImage} style={styles.backgroundImagenew}>
    
       
        <View style = { styles.MainContainer }>  
               
        <View style={styles.containerTop}>
            
        <Text style={styles.headingstyle}>We have sent you an sms to</Text>
        <Text style = {styles.subtext}>XXX-XXX-XXX,please enter the code.</Text>
        
        {/* <View style={styles.input}>
        
        </View> */}

<TextInput 
placeholder="Enter the code"
      style={{height: 50 ,width: 350 ,borderColor: 'gray', borderWidth: 1  , marginTop: 10 , borderRadius: 5 , padding: 10}}
    
    />
 
 <View style={{ width: 350, flexDirection:"row" , textAlign: "center" ,marginTop: 12 ,justifyContent: 'space-between'}}>
<View style = {{flexDirection: 'row' ,backgroundColor: 'lightgrey' ,marginRight: 10 , borderRadius: 10 , borderWidth:0.5}}>
<Button

title="Send code again"
color="#000" 

/>
</View>

<View style = {{flexDirection: 'row' , backgroundColor: 'lightgrey' ,marginLeft: 10 , borderRadius: 10 , borderWidth:0.5}}>
<Button

title="Accept"
color="#000" 

/>
</View>

 


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
      headingstyle: {
         marginRight: 90,
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
            marginLeft: 10,
            fontSize: 22,
           
        },
       

     
      containerTop: {
        
          //marginBottom: 150,
          marginTop: 0,
          justifyContent: "center",
          alignItems: "center"
      },
     
   

    
    
    
    
      
    });
    
import React, { Component } from 'react';
import {Image, Text, Alert, Button, View, StyleSheet, TouchableOpacity ,ImageBackground} from 'react-native';
import backgroundImage from "./src/bg.jpg";


import icongoogle from "./src/assets/image/google.png";
import iconfacebook from "./src/assets/image/fb.png";
import iconemail from "./src/assets/image/mail.png";
import iconcamera from "./src/assets/image/camera.png";
export default class loginscreen extends Component {

  _openDetail() {
    this.props.navigation.navigate('emailscreen')
  }

  
//   _openSignUpScreen() {
//     this.props.navigation.navigate('Signupscreen')
// }
    render() {
        return(
        // <ImageBackground source={backgroundImage} style={styles.backgroundImagenew}>
    
       
        <View style = { styles.MainContainer }>  
               
        <View style={styles.containerTop}>
             {/* <Image
               style={styles.imageTOP}
                source={logo}
                        /> */}
        <Text style={styles.headingstyle}>Log-In as </Text>
        <Text style={styles.headingstyle}>Ewanner</Text>
        <View style= { styles.logoContainer }>
          <Text style = { styles.logoDescription }>
            Alquilya y pon en alquiles tus objetos sin limites 
          </Text>
          <Text  style = { styles.logoDescription}>y sacales rendimiento</Text>
    
        </View> 

    

        </View>
    
        <View style = {styles.loginContainer}> 
<TouchableOpacity  onPress={this._openDetail.bind(this)}>
<View style={{flexDirection: 'row', textAlign: 'center', fontSize: 30, borderWidth: 1,
        borderColor: "red",padding:5 , width: 350}} >
    <Image  source={iconemail} style={{width: 40, height: 40, }} />
    <Text style={{ alignSelf:"center", marginLeft:25,fontSize: 25}}>Continue with email</Text>
</View>
</TouchableOpacity>

<View style={{flexDirection: 'row', textAlign: 'center', fontSize: 30, borderWidth: 1,
        borderColor: "red",padding:5 , width: 350 ,marginTop: 15}}>
    <Image  source={iconfacebook} style={{width: 40, height: 40, }} />
    <Text style={{ alignSelf:"center", marginLeft:25,fontSize: 25}}>Continue with Facebook</Text>
</View>

<View style={{flexDirection: 'row', textAlign: 'center', fontSize: 30, borderWidth: 1,
        borderColor: "red",padding:5 , width: 350 , marginTop: 15}}>
    <Image  source={icongoogle} style={{width: 40, height: 40, }} />
    <Text style={{ alignSelf:"center", marginLeft:25,fontSize: 25}}>Continue with Google</Text>
</View>
 
</View>
       

   

    <View style={ styles.bottomView} >
      
    

<View style={{backgroundColor: '#fff' , width:'100%' , flex: 1 , justifyContent: 'center',alignItems: 'center'}}>
<Image  source={iconcamera} style={{width: 40, height: 40, }} />
</View>

<View style={{backgroundColor: 'lightgrey' , width:'100%' , flex: 2 ,justifyContent: 'center' , alignItems: 'center'}}>
<Text style={styles.textStyle}>Not an ewanner yet? <Text style={{color:'red'}}>Sign-Up</Text></Text>
     {/* onPress={this._openSignUpScreen.bind(this)} */}
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
            fontSize: 50,
            color:'#D4112C',
            fontWeight: 'bold',
        },

       

      backgroundImagenew: {
          width: "100%",
          flex: 1,
         // justifyContent: 'center',
    
      },
      containerTop: {
        
          //marginBottom: 150,
          marginTop: 0,
          justifyContent: "center",
          alignItems: "center"
      },
      imageTOP: {
          width: 30,
          height: 30,
         
          // justifyContent: 'center',
          // alignItems: 'center',
          // flexDirection: 'row'
        //marginLeft:50
    
      },
      logoContainer:{
       
        alignItems: "center",
        
    },
    logoText: {
        fontSize: 26,
        color:'black',
        fontWeight: '600',
       
    },
    logoDescription:{
        fontSize: 15,
        color:'grey',
        fontWeight: '600',
        
    },
    loginContainer:{
       //flex: 1,
       marginTop: 50,
        flexDirection:"column",
        //flexDirection: 'row',
        alignItems: 'stretch',  
        width: null,
        justifyContent: "center",
       // backgroundColor: 'grey',
       // borderWidth: 1,
        height: 250,
       
       
      
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
 
    textStyle:{
 
      color: '#000',
      fontSize:22
    }
      
       

    //   blueview:{

    //     flex:1,
    //     flexDirection: 'row',
    //     backgroundColor: 'blue',
    //     justifyContent: "center",
    //  },
    //  greenview:{

    //     flex:1,
    //     flexDirection: 'row',
    //     backgroundColor: 'blue',
    //     justifyContent: "center",
    //  },
    //  redview:{

    //     flex:1,
    //     flexDirection: 'row',
    //     backgroundColor: 'blue',
    //     justifyContent: "center",
    //  },

    
     
    
    
    
    
      
    });
    
import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground, ScrollView,
    Dimensions, Activity
} from 'react-native'

import backgroundImage from "./src/assets/splash.jpg";

class LoginType extends Component {



   
    


    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImagenew}>

            </ImageBackground>

            
        )
    }

}

const styles = StyleSheet.create({

    backgroundImagenew: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',

    },
    
    
});




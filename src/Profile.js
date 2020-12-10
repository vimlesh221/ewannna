import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class Profile extends React.Component {


    // componentDidMount() {
    //     // Listen for screen focus event
    //     this.props.navigation.addListener('Profile')

    //   //  this.props.navigation.navigate('login')   
    //   }


  render() {

    return (
      <View style={styles.container}>
        <Text>Dashboard Screen</Text>
      </View>

    );

  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  }
});
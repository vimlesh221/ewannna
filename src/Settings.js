import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class Settings extends React.Component {

    // componentDidMount() {
    //     // Listen for screen focus event
    //     this.props.navigation.addListener('Settings')

    //   //  this.props.navigation.navigate('login')   
    //   }


  render() {

    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
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

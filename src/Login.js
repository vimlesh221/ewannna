import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';


class Login extends React.Component {
  constructor(){
if(islogin){

}{
  
}

  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <TouchableOpacity onPress={() => this.props.saveUserName('demo 3')}>
        <Text style={{ fontSize: 20, marginTop: 5 }}>UserName</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.savePassword('asddd')}>
        <Text style={{ fontSize: 20, marginTop: 5 }}>{this.props.counter}</Text>
        </TouchableOpacity>
       
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


function mapStateToProps(state) {
  return {
   
  }
}

function mapDispatchToProp(dispatch) {
  return {
    
      saveUserName: (user) => dispatch({ type: 'usertype', add:user})
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Login)



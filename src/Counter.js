/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';


class Counter extends React.Component {

    //state:

    // Not required as we have created one in reducer APP.JS

    // state = {
    //     counter: 0
    // }


    // //fat arrow function
    // increaseCounter = () => {
    //     this.setState({ counter: this.state.counter + 1 })
    // }

    // decreaseCounter = () => {
    //     this.setState({ counter: this.state.counter - 1 })
    // }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: 300 }}>
                    <Text style={{ fontSize: 30 }}>username: {this.props.data.username} </Text>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
       
        data: state.data,
    }
}

function mapDispatchToProp(dispatch) {
    return {
      
     
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
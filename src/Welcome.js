import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/free-regular-svg-icons'


class Welcome extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button
                    color="#ff5c5c"
                    title='Dashboard New'
                    onPress={this._openDashboard.bind(this)}
                >
                </Button>

            </View>

        );
    }

    //function calling
    _openDashboard() {
        this.props.navigation.navigate('Home')
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
});




export default Welcome;
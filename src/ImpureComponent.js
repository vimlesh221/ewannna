import React, { PureComponent } from 'react';
import {
  Text
} from 'react-native';

class ImpureComponent extends PureComponent {
    constructor() {
      super();
      this.state = {
        counter: 0
      }
      
      // The value of Counter is updated to same value during continues interval
      
      setInterval(() => {
        this.setState({
          counter: 0
        });
      }, 1000);
    }
    getListLeaderBoardCall(){
        console.log("render");
    }
    render() {
      return <Button
      onPress={this.getListLeaderBoardCall()}
    />
    }
  }
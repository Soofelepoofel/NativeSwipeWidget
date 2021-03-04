'use strict';

import { React, Component, createElement } from "react";
import {Dimensions, View, Text, Image} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SwipeRender from "react-native-swipe-render";

export class SwipeWidget extends Component {


    constructor(props) {
        super(props);
        this.state = {
          backgroundColor: 'transparent'
        };
      }
     
      onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_LEFT:
            this.setState({});
            break;
          case SWIPE_RIGHT:
            this.setState({});
            break;
        }
      }
    
    render() {

        if(this.props.data.status !== "available"){
          return null;
        }

        const config = {
          velocityThreshold: 1,
          directionalOffsetThreshold: 80,
          gestureIsClickThreshold: 10,
        };

        return (
            <GestureRecognizer
            onSwipe={(direction, state) => this.onSwipe(direction, state)}
            onSwipeLeft={(state) => this.props.onSwipeLeft.execute()}
            onSwipeRight={(state) => this.props.onSwipeRight.execute()}
            config={config}
            style={{
              flex: 1,
            // position: "absolute",
            // height: Dimensions.get('window').height,
            // top: 0,
            // bottom: 0,
            // left: 0,
            // right: 0,
            // backgroundColor: this.state.backgroundColor,
            }}
            >
              {this.props.content}
            </GestureRecognizer>

        );
    }
}

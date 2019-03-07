/*
@author Phat Dat Nguyen
*/
import React, { Component } from "react";
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';
import CoinScreen from './components/CoinScreen';

/* Class used to retrieve Bitcoin instance of CoinScreen
 to pass into Navigator. The index determines the specific coin
 to display.
 */
export class Bitcoin extends Component {
  render() {
    return (
      <CoinScreen index={0}/>
    );
  }
}

/* Class used to retrieve Ethereum instance of CoinScreen
 to pass into Navigator. The index determines the specific coin
 to display.
 */
export class Ethereum extends Component {
  render() {
    return (
      <CoinScreen index={1}/>
    );
  }
}

/* Class used to retrieve XRP instance of CoinScreen
 to pass into Navigator. The index determines the specific coin
 to display.
 */
export class XRP extends Component {
  render() {
    return (
      <CoinScreen index={2}/>
    );
  }
}

/* Navigator that handles logic of navigating
from screen to screen.
*/
export const TabNavigator = createMaterialTopTabNavigator(
  {
  /* The three main screens of the application. */
    Bitcoin,
    Ethereum,
    XRP
  },{
  /* Stylesheet for navigation bar. */
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
          activeTintColor: '#19979e',
          inactiveTintColor: 'grey',
          labelStyle: {
            fontSize: 14
          },
          indicatorStyle: {
            height: 2,
            color: 'teal'
          },
          labelStyle: {
            fontWeight: 'bold'

          },
          style: {
            backgroundColor: 'floralwhite'
          }
        }
  }
);

/* App component rendering our entire application.
*/
export default class App extends Component {
    render() {
      return (
        <TabNavigator/>
      )
    }
}

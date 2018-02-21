/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "mobx-react";
import stores from "./app/stores";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/app.navigator";

export default class App extends Component<Props> {
  render() {
    return (
      <Provider stores={stores}>
        <AppNavigator />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

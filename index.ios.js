/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class rnboilerplate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.content}>
          <View style={styles.inputs}>
            <TextInput style={styles.input}/>
            <View style={{ borderTopWidth:1.5 }}/>
            <TextInput style={styles.input}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor:'black'
  },
  content: {
    flex: 1,
  },
  inputs: {
    margin: 10,
    // borderTopLeftRadius: 4,
    // borderTopRightRadius: 4,
    // borderTopWidth: 1.5,
    // borderLeftWidth:1.5,
    // borderRightWidth:1.5,
    borderRadius:6,
    borderWidth:1.5

  },
  input: {
    height: 30,
  }
});

AppRegistry.registerComponent('rnboilerplate', () => rnboilerplate);

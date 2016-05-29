/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
  },
  input: {
    height: 30,
  }
});

AppRegistry.registerComponent('rnboilerplate', () => rnboilerplate);

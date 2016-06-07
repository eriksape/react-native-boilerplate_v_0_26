/**
 * # app.js
 *  Display startup screen and
 *  getSessionTokenAtStartup which will navigate upon completion
 *
 */

import React from 'react'
import {
  StyleSheet,
  View,
  Text
}
from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'


const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth:2,
    marginTop: 80,
    padding: 10
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

/**
 * ## App class
 */
const App = React.createClass({
  /**
   * See if there's a sessionToken from a previous login
   *
   */
  componentDidMount() {
    const { auth } = this.props
    if(!auth.get('login')) Actions.Login()
    //this.props.actions.getSessionToken()
  },

  getDefaultProps(){
    return {
      text:'App Startup Screen'
    }
  },

  render() {
    const { text } = this.props
    return(
      <View style={ styles.container }>
        <Text style={ styles.summary }> { text } </Text>
      </View>
    )
  }
})

/**
 * Connect the properties
 */
export default connect(
  state => ({ auth: state.auth })
)(App)

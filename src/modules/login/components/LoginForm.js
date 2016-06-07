import React from 'react'
import {
  Alert,
  Text,
  View,
  TextInput,
} from 'react-native'
import {reduxForm} from 'redux-form'
import Button from 'apsl-react-native-button'

import styles from './../styles'

const validate = values => {
  const errors = {}

  return errors
}

class LoginForm extends React.Component {
  render() {
    const {fields: {email, password},  handleSubmit, submitting, auth, hideAlert} = this.props
    const errors =  {}
    const errorMsg = process.env.NODE_ENV === 'production' ? 'Uh oh, something went wrong' : (errors.login || '').toString()

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          login
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="email"
          // onChangeText={(email) => this.setState({email})}
          // value={this.state.email}
          {...email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          // onChangeText={(password) => this.setState({password})}
          // value={this.state.password}
          {...password}
        />
        {auth.get('errors').size > 0 && Alert.alert( auth.get('errors').get('title') , auth.get('errors').get('message'), [{ onPress: () => hideAlert() }] ) }
        <Button onPress={handleSubmit} disabledStyle={styles.button_disabled} textStyle={styles.button} activeOpacity={1} style={{borderWidth:0}} >
          Login
        </Button>
      </View>
    )
  }
}

LoginForm.propTypes = {
  auth: React.PropTypes.object,
  fields: React.PropTypes.object.isRequired,
  //formStyles: React.PropTypes.object,
  //buttonStyles: React.PropTypes.object,

  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'login',
  validate,
  fields: ['email', 'password'],
}
)(LoginForm)

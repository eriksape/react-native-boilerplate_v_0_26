import React from 'react'
import {
  Text,
  View,
  TextInput,
} from 'react-native'
import {reduxForm} from 'redux-form'

import layoutStyles from '../../ui/styles/layout'
import typographyStyles from '../../ui/styles/typography'
import formStyles from '../../ui/styles/form'
import buttonStyles from '../../ui/styles/button'
import Button from '../../ui/components/Button'

import authActions from './../../../reducers/auth/authActions'
const validate = values => {
  const errors = {}

  return errors
}


const submit = (values, dispatch) => {

  debugger
  fetch('http://localhost:8000/api/auth',{
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers:     {
      "Content-type":     "application/json",
      'X-Requested-With': 'XMLHttpRequest',
    },
    body:JSON.stringify(values)
  })
      .then((response) => response.json())
      .then((responseData) => {
        debugger
      })
      .done();
}

class LoginForm extends React.Component {

  render() {
    const {fields: {email, password},  handleSubmit, submitting} = this.props
    const errors =  {}
    const errorMsg = process.env.NODE_ENV === 'production' ? 'Uh oh, something went wrong' : (errors.login || '').toString()

    return (
      <View style={layoutStyles.container}>
        <Text style={typographyStyles.h1}>
          login
        </Text>
        <TextInput
          style={formStyles.textInput}
          placeholder="email"
          // onChangeText={(email) => this.setState({email})}
          // value={this.state.email}
          {...email}
        />
        <TextInput
          style={formStyles.textInput}
          placeholder="password"
          // onChangeText={(password) => this.setState({password})}
          // value={this.state.password}
          {...password}
        />
        {errors.login && <Text>{errorMsg}</Text>}
        <Button onPress={handleSubmit(submit)} style={buttonStyles.button}>
          Login
        </Button>
      </View>
    )
  }
}

LoginForm.propTypes = {
  //auth: React.PropTypes.object,
  fields: React.PropTypes.object.isRequired,
  formStyles: React.PropTypes.object,
  buttonStyles: React.PropTypes.object,

  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'login',
  validate,
  fields: ['email', 'password'],
})(LoginForm)

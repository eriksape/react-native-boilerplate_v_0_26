import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import { Actions } from 'react-native-router-flux'

import Login from './../components/LoginForm'
import authActions from './../../../reducers/auth/authActions'

//import router from '../../../routing'

class LoginContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
      const {auth} = nextProps
      if(auth.get('login')) Actions.Loged()
  }

  hideAlert(){
    this.props.dispatch({type:"auth_RESET_LOGIN"})
  }

  onLogin(values, dispatch){
      dispatch(
        authActions.verify({
          body:values,
        })
      )
  }

  render() {
    const {auth} = this.props
    return (
      <Login onSubmit={this.onLogin} auth={auth} hideAlert={this.hideAlert.bind(this)} />
    )
  }
}

LoginContainer.propTypes = {
  auth: React.PropTypes.object,
}

export default connect(state => _.pick(state, 'auth'))(LoginContainer)

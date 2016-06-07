import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'

import Login from './../components/LoginForm'
import authActions from './../../../reducers/auth/authActions'

//import router from '../../../routing'

class LoginContainer extends React.Component {

  onLogin(values, dispatch){
      dispatch(
        authActions.verify({
          body:values,
        })
      )
  }

  render() {
    const {auth} = this.props
    debugger;
    return (
      <Login onSubmit={this.onLogin} auth={auth} />
    )
  }
}

LoginContainer.propTypes = {
  auth: React.PropTypes.object,
}

export default connect(state => _.pick(state, 'auth'))(LoginContainer)

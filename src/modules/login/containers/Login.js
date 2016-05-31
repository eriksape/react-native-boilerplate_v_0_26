import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
//import {login} from 'fl-auth-redux'

import Login from '../components/LoginForm'


import authActions from './../../../reducers/auth/authActions'
//import router from '../../../routing'

class LoginContainer extends React.Component {

  // componentWillReceiveProps() {
  //   if (this.props.auth.get('email')) this.props.nav.push({route: 'home'})
  // }

  onLogin = values => {
    console.log('dispatching', values)

    return new Promise((resolve, reject) => {
      this.props.dispatch(authActions.verify({
        body:values,
        extra:{reject:reject,resolve:resolve}
      }))
    }).then(function(home){
      debugger
    }).catch( (e) => {
      debugger
      console.log(e)
    } )

    // this.props.login(`${this.props.config.get('url')}/login`, data.email, data.password, (err) => {
    //   console.log('req done', err)
    //   if (!err) this.props.nav.push(router.get('menu'))
    // })
  };

  render() {
    //const {auth} = this.props
    return (
      <Login  />
    )
  }
}

LoginContainer.propTypes = {
  //auth: React.PropTypes.object,
  config: React.PropTypes.object.isRequired,
  nav: React.PropTypes.object.isRequired,
  //login: React.PropTypes.func.isRequired,
}

export default connect(state => _.pick(state, 'auth', 'config'))(LoginContainer)

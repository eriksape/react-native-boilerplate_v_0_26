import _ from 'lodash'
import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import router from '../../../routing'

export default class Link extends React.Component {

  onPress = (event) => {
    if (this.props.disabled) {
      event.preventDefault()
      return
    }

    if (this.props.children.props && this.props.children.props.onPress) {
      this.props.children.props.onPress(event)
    }

    this.props.nav.push(router.get(this.props.to))
  };

  render() {
    const touchableProps = {
      onPress: this.props.onPress || this.onPress,
      activeOpacity: 0.2,
    }
    const style = [this.props.style]

    if (this.props.disabled) {
      touchableProps.onPress = null
      touchableProps.activeOpacity = 1
      if (this.props.disabledStyle) style.push(this.props.disabledStyle)
    }

    let children = this.props.children
    children = (React.isValidElement(children) || _.isArray(children)) ? this.props.children : (<Text style={style}>{children}</Text>)

    return (
      <TouchableOpacity {...touchableProps}>
        {children}
      </TouchableOpacity>
    )
  }

}

Link.propTypes = {
  nav: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  to: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  style: Text.propTypes.style,
  disabledStyle: Text.propTypes.style,
}

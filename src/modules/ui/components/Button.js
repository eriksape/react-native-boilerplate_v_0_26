import _ from 'lodash'
import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'

export default class Button extends React.Component {

  render() {
    const touchableProps = {
      onPress: this.props.onPress,
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

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  onPress: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool,
  style: Text.propTypes.style,
  disabledStyle: Text.propTypes.style,
}

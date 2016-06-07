import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FC6F',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  button: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#999',
    color: '#007aff',
    fontFamily: '.HelveticaNeueInterface-MediumP4',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button_disabled: {
    color: '#dcdcdc',
  },
  textInput: {
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  h1: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

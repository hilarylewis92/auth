import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtPoEYOJF21zq3hMySw9BpF8rcwbKARMo',
      authDomain: 'auth-a92ee.firebaseapp.com',
      databaseURL: 'https://auth-a92ee.firebaseio.com',
      projectId: 'auth-a92ee',
      storageBucket: 'auth-a92ee.appspot.com',
      messagingSenderId: '691529598350'
    })
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    )
  }
}

export default App

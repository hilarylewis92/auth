import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtPoEYOJF21zq3hMySw9BpF8rcwbKARMo',
      authDomain: 'auth-a92ee.firebaseapp.com',
      databaseURL: 'https://auth-a92ee.firebaseio.com',
      projectId: 'auth-a92ee',
      storageBucket: 'auth-a92ee.appspot.com',
      messagingSenderId: '691529598350'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      )
    }

    return <LoginForm />
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    )
  }
}

export default App

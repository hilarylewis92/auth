import React, { Component } from 'react'
import { View } from 'react-native'
import * as firebase from 'firebase'
import { Header, Button } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBx8h-4cZ8EDCpAzMPl9JjophoPuZQgSzY",
      authDomain: "native-auth-4c068.firebaseapp.com",
      databaseURL: "https://native-auth-4c068.firebaseio.com",
      projectId: "native-auth-4c068",
      storageBucket: "native-auth-4c068.appspot.com",
      messagingSenderId: "1073520945832"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
    console.log('loggedIn', this.state.loggedIn);
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

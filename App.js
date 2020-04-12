import React, { Component }from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CS from './coreStyles'
import { Button, ThemeProvider } from 'react-native-elements'
import Main from './components/Main'
import Home from './components/Home'
import Setting from './components/Setting'

import {Provider} from 'react-redux'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
            <Main/>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CS from './coreStyles'
import { Button, ThemeProvider } from 'react-native-elements'
import Home from './components/Home'
import Setting from './components/Setting'

import {Provider} from 'react-redux'

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <View style={CS.container}>
          <Text>Hello world</Text>
          <Button title="Hey!"/>
          <Home/>
          <Setting/>
        </View>
      </ThemeProvider>
    </Provider>
  )
}

export default App

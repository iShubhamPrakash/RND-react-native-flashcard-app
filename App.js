import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CS from './coreStyles'
import { Button, ThemeProvider } from 'react-native-elements'
import Home from './components/Home'
import Setting from './components/Setting'

const App = () => {
  return (
    <ThemeProvider>
      <View style={CS.container}>
        <Text>Hello world</Text>
        <Button title="Hey!"/>
        <Home/>
        <Setting/>
      </View>
    </ThemeProvider>
  )
}

export default App

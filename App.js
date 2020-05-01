import React, { Component }from 'react'
import { ThemeProvider } from 'react-native-elements'
import Main from './components/Main'
import {Provider} from 'react-redux'
import { setLocalNotification } from './utils/helpers'
// import AsyncStorage from '@react-native-community/async-storage'
import { AsyncStorage } from 'react-native'

import {STORAGE_KEY} from './utils/constants'

import store from './store'

storeData = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value)
  } catch (e) {
    // saving error
    console.log("Error while trying to add item in async storage",e)
  }
}

store.subscribe(() => {
  let stateValue = JSON.stringify(store.getState())
  storeData(stateValue)
})

class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

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
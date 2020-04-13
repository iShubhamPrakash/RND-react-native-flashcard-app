import React, { Component }from 'react'
import { ThemeProvider } from 'react-native-elements'
import Main from './components/Main'
import {Provider} from 'react-redux'
import { setLocalNotification } from './utils/helpers'

import store from './store'

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
import React, { Component }from 'react'
import { ThemeProvider } from 'react-native-elements'
import Main from './components/Main'
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
import React, { Component } from 'react'
import { View } from 'react-native'

import { Button,Text } from 'react-native-elements'

class Setting extends Component {
  render() {
    return (
      <View>
        <Text h2> Reset Data </Text>
        <Text> Clicking on reset button will remove all of the user data.</Text>
        <Button title="Reset"/>
      </View>
    )
  }
}

export default  Setting
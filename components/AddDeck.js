import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button,Text,Card, Input } from 'react-native-elements'

class AddDeck extends Component {

  state={
    inputText: ""
  }
  render() {
    return (
      <View style={styles.container}>
        <Card title="ADD A NEW DECK">
            <View>
            <Input
              inputStyle={{color:'gray', padding: 4, textAlign:'center' }}
              placeholder="Enter Deck Name"
              ref='Nameinput'
              onChangeText={text=>this.setState({inputText:text})}
            />
            <Button
              title=" CREATE"
              onPress={e=>console.log("clicked",this.state.inputText)}
              icon={
                <Icon
                  name="ios-add-circle-outline"
                  size={15}
                  color="white"
                />
              }
              linearGradientProps={{
                colors: ['red', 'blue'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              buttonStyle={{marginTop: 16}}
            />
            </View>
        </Card>
      </View>
    )
  }
}


const styles= StyleSheet.create({
 container:{
  padding: 16,
  textAlign: 'center',
  justifyContent: 'center',
 }
})

export default  AddDeck
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button,Text,Card, Input } from 'react-native-elements'
import CS from '../coreStyles'

class AddDeck extends Component {

  state={
    inputText: ""
  }

  handleSubmit=(e)=>{
    this.props.addDeck(this.state.inputText.trim())
    this.setState({inputText:""})
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
              value={this.state.inputText}
              onChangeText={text=>this.setState({inputText:text})}
            />
            <Button
              disabled={this.state.inputText.trim()===""}
              title=" CREATE"
              onPress={this.handleSubmit}
              icon={
                <Icon
                  name="ios-add-circle-outline"
                  size={15}
                  color="white"
                />
              }
              linearGradientProps={this.state.inputText.trim()!=="" ? CS.buttonGradient: null }
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
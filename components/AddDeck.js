import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button,Card, Input } from 'react-native-elements'
import CS from '../coreStyles'

import {
  addDeck,
} from '../actions'

class AddDeck extends Component {

  state={
    inputText: ""
  }

  handleSubmit=(e)=>{
    const deckName=this.state.inputText.trim()
    this.props.addDeck(deckName)
    this.setState({inputText:""})
    this.props.navigation.navigate('Add Card',{ deckName })
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
  flex:1,
  textAlign: 'center',
  justifyContent: 'center',
 }
})

const mapDispatchToProps={
  addDeck,
}


export default  connect(null,mapDispatchToProps)(AddDeck)
import React, {Component} from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import {connect} from 'react-redux'

import {
  loadInitialData,
  addDeck,
  addCardsToDeck,
  removeDeck,
  resetData,
} from '../actions'

import Setting from './Setting'
import AddDeck from './AddDeck'
class Main extends Component {

  componentDidMount(){
    console.log("After mount-", this.props);

    this.props.loadInitialData()

  }


  render() {
    return (
      <View>
        <Text h1 style={{textAlign:"center"}}>Flashcards</Text>
        <Text h1 style={{textAlign:"center"}}>Main Page</Text>
        <Setting/>
        <AddDeck/>
      </View>
    )
  }
}




function mapStateToProps(state){
  return state
}

const mapDispatchToProps={
  loadInitialData,
  addDeck,
  addCardsToDeck,
  removeDeck,
  resetData,
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)

import React, {Component} from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import {connect} from 'react-redux'
import Constants from 'expo-constants'

import {
  loadInitialData,
  addDeck,
  addCardsToDeck,
  removeDeck,
  resetData,
} from '../actions'
class Home extends Component {

  componentDidMount(){
    console.log("After mount-", this.props);

    this.props.dispatch(loadInitialData())
  }


  render() {
    return (
      <View>
        <Text h1 style={{textAlign:"center"}}>Home</Text>
      </View>
    )
  }
}


function mapStateToProps(state){
  console.log("Inside maps to props-", state)
  return state
}
export default connect(mapStateToProps)(Home)

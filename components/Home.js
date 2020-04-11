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
class Home extends Component {

  componentDidMount(){
    console.log("After mount-", this.props);

    this.props.dispatch(loadInitialData())
    // this.props.dispatch(addDeck("test"))
    // this.props.dispatch(addCardsToDeck("test",{
    //   question: 'What is test?',
    //   answer: 'TEst us erfaces. It is maintained by Facebook and a community of individual developers and companies. '
    // }))
    // this.props.dispatch(addCardsToDeck("test",{
    //   question: 'What is test 222?',
    //   answer: '222 TEst us erfaces. It is maintained by Facebook and a community of individual developers and companies. '
    // }))
    // this.props.dispatch(removeDeck('React'))
    // this.props.dispatch(removeDeck('test'))
    // this.props.dispatch(removeDeck('test'))
    // this.props.dispatch(resetData())

  }


  render() {
    return (
      <View>
        <Text h1 style={{textAlign:"center"}}>Flashcards</Text>
      </View>
    )
  }
}




function mapStateToProps(state){
  console.log("Inside maps to props-", state)
  return state
}
export default connect(mapStateToProps)(Home)

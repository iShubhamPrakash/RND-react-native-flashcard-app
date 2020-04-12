import React, {Component} from 'react'
import { View,StyleSheet,SafeAreaView } from 'react-native'
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

import Setting from './Setting'
import AddDeck from './AddDeck'
import AddQuestion from './AddQuestion'
import QuizStartView from './QuizStartView'
import Question from './Question'
import Result from './Result'
import CardList from './CardList'
class Main extends Component {

  componentDidMount(){
    console.log("After mount-", this.props);

    this.props.loadInitialData()

  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text h1 style={{textAlign:"center"}}>Flashcards</Text>
        {/* <Setting/> */}
        <AddDeck addDeck={this.props.addDeck}/>
        {/* <AddQuestion/> */}
        {/* <QuizStartView/> */}
        {/* <Question/> */}
        {/* <Result/> */}
        <CardList {...this.props}/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
});



function mapStateToProps(state){
  return { deck: state}
}

const mapDispatchToProps={
  loadInitialData,
  addDeck,
  addCardsToDeck,
  removeDeck,
  resetData,
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)

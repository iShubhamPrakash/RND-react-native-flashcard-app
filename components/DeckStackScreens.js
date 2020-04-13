import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import CardList from './CardList'
import QuizStartView from './QuizStartView'
import AddQuestion from './AddQuestion'



const DeckStack = createStackNavigator()

const DeckStacksScreens=()=>{
  return (
    <DeckStack.Navigator initialRouteName="Flash Cards">
      <DeckStack.Screen name='Flash Cards' component={CardList}/>
      <DeckStack.Screen name='Start Quiz' component={QuizStartView}/>
      <DeckStack.Screen name='Add Card' component={AddQuestion}/>
    </DeckStack.Navigator>
  )
}

export default DeckStacksScreens
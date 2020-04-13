import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import CardList from './CardList'
import QuizStartView from './QuizStartView'



const DeckStack = createStackNavigator()

const DeckStacksScreens=()=>{
  return (
    <DeckStack.Navigator>
      <DeckStack.Screen name='Flash Cards' component={CardList}/>
      <DeckStack.Screen name='Start Quiz' component={QuizStartView}/>
    </DeckStack.Navigator>
  )
}

export default DeckStacksScreens
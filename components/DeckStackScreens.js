import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CardList from './CardList'
import QuizStartView from './QuizStartView'
import AddQuestion from './AddQuestion'
import Question from './Question'
import Result from './Result'

const DeckStack = createStackNavigator()

const DeckStacksScreens=()=>{
  return (
    <DeckStack.Navigator initialRouteName="Flash Cards">
      <DeckStack.Screen
        name='Flash Cards'
        component={CardList}
        options={{
          headerLeft:()=><Icon name="cards-outline" size={30} style={{left:20}}/>
          }}
      />
      <DeckStack.Screen name='Start Quiz' component={QuizStartView}/>
      <DeckStack.Screen name='Add Card' component={AddQuestion}/>
      <DeckStack.Screen name='Quiz' component={Question}/>
      <DeckStack.Screen name='Result' component={Result}/>
    </DeckStack.Navigator>
  )
}

export default DeckStacksScreens
import React, {Component} from 'react'
import { View,StyleSheet,SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import {connect} from 'react-redux'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator()

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
import DeckStackScreens from './DeckStackScreens'


class Main extends Component {

  componentDidMount(){
    console.log("After mount-", this.props);

    this.props.loadInitialData()

  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text h1 style={{textAlign:"center"}}>Flashcards</Text> */}
        {/* <Setting resetData={this.props.resetData}/> */}
        {/* <AddDeck addDeck={this.props.addDeck}/> */}
        {/* <AddQuestion/> */}
        {/* <QuizStartView/> */}
        {/* <Question/> */}
        {/* <Result/> */}
        {/* <CardList {...this.props}/> */}

        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Deck') {
                iconName = focused
                  ? 'ios-apps'
                  : 'ios-apps';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }else if(route.name === 'Add'){
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Deck" component={DeckStackScreens} />
          <Tab.Screen name="Add" component={AddDeck} />
          <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
        </NavigationContainer>
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

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { Button,Text,Card, Badge } from 'react-native-elements'

import CS from '../coreStyles'

class QuizStartView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View>
            <Text h4 style={{textAlign:'center'}}>Card Title</Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Text>Total number of cards: </Text>
              <Badge status="warning" value="5"/>
            </View>

          </View>
        </Card>
        <View style={{padding: 15}}>
          <Button
            title=" START QUIZ"
            onPress={e=>console.log("clicked")}
            icon={
              <Icon1
              name="control-play"
              size={15}
              color="white"
              />
            }
            linearGradientProps={CS.buttonGradient}
            buttonStyle={{marginTop: 16}}
          />
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button
              title=" ADD CARDS"
              onPress={e=>console.log("clicked")}
              icon={
                <Icon
                  name="ios-add-circle-outline"
                  size={20}
                  color="white"
                />
              }
              buttonStyle={{marginTop: 16}}
              linearGradientProps={{
                colors: ['darkgreen', 'green'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
            />
            <Button
              title=" DELETE DECK"
              onPress={e=>console.log("clicked")}
              icon={
                <Icon2
                  name="delete"
                  size={18}
                  color="white"
                />
              }
              linearGradientProps={{
                colors: ['maroon', 'red'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              buttonStyle={{marginTop: 16}}
            />
          </View>
        </View>
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

export default  QuizStartView
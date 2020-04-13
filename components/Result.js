import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Button,Text,Card, Badge } from 'react-native-elements'

import CS from '../coreStyles'

class Result extends Component {
  render() {
    const {correct, incorrect,cards,total,correctPercent,deckName} = this.props.route.params.result

    return (
      <View style={styles.container}>
        <Card title="Thanks for playing">
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text h3>{+correctPercent}% Result</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Text>Correct: </Text>
            <Badge status="warning" value={correct}/>
            <Text>    Incorrect: </Text>
            <Badge status="error" value={incorrect}/>
          </View>
          <View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Button
              title=" Restart "
              onPress={e=>this.props.navigation.push('Quiz',{deckName,cards})}
              icon={
                <Icon
                name="reload1"
                size={15}
                color="white"
                />
              }
              linearGradientProps={{
                colors: ['darkgreen', 'green'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              buttonStyle={{marginTop: 16}}
            />
              {/* <Button
                title=" Back  "
                onPress={e=>this.props.navigation.goBack()}
                icon={
                  <Icon
                  name="back"
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
                /> */}
              <Button
                title=" Home "
                onPress={e=> this.props.navigation.push('Flash Cards')}
                icon={
                  <Icon
                  name="home"
                  size={18}
                  color="white"
                  />
                }
                linearGradientProps={CS.buttonGradient}
                buttonStyle={{marginTop: 16}}
              />
            </View>
          </View>
        </Card>
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

export default  Result
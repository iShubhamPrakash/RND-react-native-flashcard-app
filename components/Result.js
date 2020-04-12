import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Button,Text,Card, Badge } from 'react-native-elements'

import CS from '../coreStyles'

class Result extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="Thanks for playing">
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text h3>100% Result</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Badge status="warning" value="5/5"/>
            <Text>  Correct</Text>
          </View>
          <View>
            <Button
              title=" Restart"
              onPress={e=>console.log("clicked")}
              icon={
                <Icon
                name="reload1"
                size={15}
                color="white"
                />
              }
              linearGradientProps={CS.buttonGradient}
              buttonStyle={{marginTop: 16}}
              />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Button
                title=" Back  "
                onPress={e=>console.log("clicked")}
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
                />
              <Button
                title=" Home"
                onPress={e=>console.log("clicked")}
                icon={
                  <Icon
                  name="home"
                  size={18}
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
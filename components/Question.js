import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Button,Text,Card, Badge } from 'react-native-elements'

import CS from '../coreStyles'

class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{paddingLeft:16, alignItems:'flex-start'}}>
          <Badge status="warning" value="5/5"/>
        </View>
        <Card title="Question">
          <View>
            <Text style={{textAlign:'left', fontSize:20}}>Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air.  See previous answer on “How does COVID-19 spread?</Text>
          </View>
        </Card>

        <Card title="Answer">
          <View>
            <Text style={{textAlign:'left', fontSize:20}}>Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air.  See previous answer on “How does COVID-19 spread?</Text>
          </View>
        </Card>

        <View style={{padding: 15}}>
          <Button
            title=" SHOW ANSWER"
            onPress={e=>console.log("clicked")}
            icon={
              <Icon
              name="eyeo"
              size={15}
              color="white"
              />
            }
            linearGradientProps={CS.buttonGradient}
            buttonStyle={{marginTop: 16}}
          />
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button
              title=" Correct "
              onPress={e=>console.log("clicked")}
              icon={
                <Icon
                  name="check"
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
              title=" Incorrect"
              onPress={e=>console.log("clicked")}
              icon={
                <Icon
                  name="close"
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

export default  Question
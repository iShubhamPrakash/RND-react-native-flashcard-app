import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button,Text,Card, Input } from 'react-native-elements'

class AddQuestion extends Component {

  state={
    question: "",
    answer:""
  }
  render() {
    return (
      <View style={styles.container}>
        <Card title="NEW QUESTION">
          <View>
            <Input
              inputStyle={{color:'gray' }}
              placeholder="Enter Question"
              label="Question"
              multiline={true}
              onChangeText={text=>this.setState({question:text})}
            />

            <Input
              inputStyle={{color:'gray'}}
              label="Answer"
              placeholder="Enter Answer"
              multiline={true}
              onChangeText={text=>this.setState({answer:text})}
            />

            <Button
              title=" ADD"
              onPress={e=>console.log("clicked",this.state)}
              icon={
                <Icon
                  name="ios-add-circle-outline"
                  size={15}
                  color="white"
                />
              }
              linearGradientProps={{
                colors: ['red', 'blue'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              buttonStyle={{marginTop: 16}}
            />
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

export default  AddQuestion
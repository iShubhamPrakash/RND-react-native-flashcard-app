import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button,Text,Card, Input } from 'react-native-elements'
import CS from '../coreStyles'

import {
  addCardsToDeck,
} from '../actions'
class AddQuestion extends Component {

  state={
    question: "",
    answer:""
  }

  handleAddCard=()=>{
    const {deckName} =this.props.route.params
    const {question, answer} = this.state
    this.props.addCardsToDeck(deckName,{question,answer})
    this.setState({question:"",answer:""})
    this.props.navigation.goBack()
  }

  render() {
    const {question, answer} = this.state
    return (
      <View style={styles.container}>
        <Card title="NEW QUESTION">
          <View>
            <Input
              inputStyle={{color:'gray' }}
              placeholder="Enter Question"
              label="Question"
              multiline={true}
              value={question}
              onChangeText={text=>this.setState({question:text})}
            />

            <Input
              inputStyle={{color:'gray'}}
              label="Answer"
              placeholder="Enter Answer"
              multiline={true}
              value={answer}
              onChangeText={text=>this.setState({answer:text})}
            />

            <Button
              title=" ADD"
              disabled={question.trim()==="" || answer.trim()===""}
              onPress={this.handleAddCard}
              icon={
                <Icon
                  name="ios-add-circle-outline"
                  size={15}
                  color="white"
                />
              }
              linearGradientProps={question.trim()==="" || answer.trim()==="" ? null: CS.buttonGradient}
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
  flex:1,
  textAlign: 'center',
  justifyContent: 'center',
 }
})

const mapDispatchToProps={
  addCardsToDeck,
}

export default  connect(null,mapDispatchToProps)(AddQuestion)
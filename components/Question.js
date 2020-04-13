import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View,ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {AntDesign} from 'react-native-vector-icons'
import { Button,Text,Card, Badge } from 'react-native-elements'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

import CS from '../coreStyles'

class Question extends Component {
  state={
    deckName:"",
    cards:[],
    isAnswerVisible: false,
    correct:0,
    incorrect:0,
    curresntQuestionIndex:0
  }

  componentDidMount(){
    const {deckName,cards}= this.props.route.params
    this.setState({deckName,cards})
    clearLocalNotification().then(setLocalNotification)
  }

  handleAnswerClick=(ans)=>{
    const {cards,curresntQuestionIndex}= this.state
    this.setState(prevState=>{
      return {[ans]:prevState[ans]+1, curresntQuestionIndex: prevState.curresntQuestionIndex+1,isAnswerVisible:false}
    })
  }

  calculateResult=()=>{
    const {correct, incorrect,cards,deckName} = this.state

    const total= cards.length
    const correctPercent= ((correct/total)*100).toPrecision(2)
    this.props.navigation.push('Result',{result: {correct, incorrect,cards, total,correctPercent,deckName}})
  }

  render() {
    const {isAnswerVisible,deckName,cards,curresntQuestionIndex}= this.state
    const totalQuestion=cards.length

    if(deckName===""){
      return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{textAlign:'center'}}>Loading Cards...</Text>
    </View>
    }

    if(cards.length===0){
      return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{textAlign:'center'}}>No cards in the deck!!</Text>
      </View>
    }

    if(curresntQuestionIndex === totalQuestion){
      this.calculateResult()
      return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{textAlign:'center'}}>Calculating result...</Text>
      </View>
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{paddingLeft:16, flexDirection:'row', alignItems:'flex-start'}}>
            <Badge status="warning" value={`${curresntQuestionIndex+1}/${totalQuestion}`}/>
            <Text>  {deckName}</Text>
          </View>
          <Card title="Question">
            <View>
              <Text style={{textAlign:'left', fontSize:20}}>{cards[curresntQuestionIndex].question}</Text>
            </View>
          </Card>
          {
          isAnswerVisible && (
            <Card title="Answer">
            <View>
              <Text style={{textAlign:'left', fontSize:20}}>{cards[curresntQuestionIndex].answer}</Text>
            </View>
          </Card>
          )}


          <View style={{padding: 15}}>
            <Button
              title={isAnswerVisible? " HIDE ANSWER":" SHOW ANSWER"}
              onPress={e=>this.setState({isAnswerVisible: !this.state.isAnswerVisible})}
              icon={
                <Icon
                name={isAnswerVisible? "eye-off":"eye"}
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
                onPress={e=>this.handleAnswerClick("correct")}
                icon={
                  <AntDesign
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
                onPress={e=>this.handleAnswerClick("incorrect")}
                icon={
                  <AntDesign
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
      </ScrollView>
    )
  }
}


const styles= StyleSheet.create({
 container:{
  paddingTop: 20,
  textAlign: 'center',
  justifyContent: 'center',
 }
})

export default  Question
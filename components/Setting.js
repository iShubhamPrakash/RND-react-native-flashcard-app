import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, StyleSheet,Linking,Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Button,Text,Card,SocialIcon,Avatar } from 'react-native-elements'
import CS from '../coreStyles'

import {
  resetData,
} from '../actions'

class Setting extends Component {

  handleSubmit=(e)=>{
    Alert.alert(
      'Are you sure?',
      'This will remove all of your decks and reset the app!',
      [
        {text: 'NO', onPress: () => console.log("Cancel reset"), style: 'cancel'},
        {text: 'YES', onPress: () => {
          this.props.resetData()
          this.props.navigation.navigate('Deck')
        }},
      ]
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Card title="RESET DATA">
            <View>
            <Text style={{color:'gray', padding: 12, textAlign:'center'}}> Remove all user data ?</Text>
            <Button
              title=" RESET"
              raised={true}
              onPress={this.handleSubmit}
              icon={
                <Icon
                  name="back-in-time"
                  size={15}
                  color="white"
                />
              }
              linearGradientProps={CS.buttonGradient}
            />
            </View>
        </Card>
        <Card title="Contact Developer">
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Avatar
            rounded
            size="xlarge"
            title="SP"
            source={{
              uri:
                'https://www.gravatar.com/avatar/41c5c018961438b2b5f1eff46ee03e17?s=200',
            }}
            onPress={ ()=> Linking.openURL('https://shubhamprakash.dev') }
          />
          <Text h4>Shubham Prakash</Text>
          <View style={{flexDirection:'row'}}>
            <SocialIcon
              light
              type='linkedin'
              onPress={ ()=> Linking.openURL('https://www.linkedin.com/in/ishubhamprakash/') }
            />

            <SocialIcon
              light
              type='github'
              onPress={ ()=> Linking.openURL('https://github.com/i-shubhamprakash/') }
            />

            <SocialIcon
              light
              type='twitter'
              onPress={ ()=> Linking.openURL('https://twitter.com/isuvm') }
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
  flex:1,
  textAlign: 'center',
  justifyContent: 'center',
 }
})
const mapDispatchToProps={
  resetData,
}

export default  connect(null,mapDispatchToProps)(Setting)
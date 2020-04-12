import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Button,Text,Card } from 'react-native-elements'
import CS from '../coreStyles'

class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="RESET DATA">
            <View>
            <Text style={{color:'gray', padding: 12, textAlign:'center'}}> Remove all user data ?</Text>
            <Button
              title=" RESET"
              raised={true}
              onPress={e=>alert("reset!!")}
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

export default  Setting
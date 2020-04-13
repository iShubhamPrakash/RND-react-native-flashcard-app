import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, FlatList } from 'react-native'
import { ListItem,Text } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import {
  loadInitialData,
} from '../actions'

class CardList extends Component {

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => item.title+index}
          data={Object.values(this.props.deck)}
          renderItem={({item})=>(
            <ListItem
              style={{margin: 16, marginBottom:8 }}
              Component={TouchableScale}
              friction={90}
              tension={100}
              activeScale={0.95}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              leftAvatar={{ rounded: true, source: { uri: 'https://ui-avatars.com/api/?background=0AAFC4&color=fff&&name='+ item.title.split(" ")[0] } }}
              title={item.title}
              titleStyle={{ color: 'white', fontWeight: 'bold' }}
              subtitleStyle={{ color: 'white' }}
              subtitle={item.cards.length + " cards"}
              chevron={{ color: 'white' }}
              onPress={e=>this.props.navigation.push('Start Quiz',{ deck:{deckName: item.title, cards: item.cards} })}
            />
          )}
          contentContainerStyle={{ paddingBottom: 55}}
        />
      </View>
    )
  }
}

function mapStateToProps(state){
  return { deck: state}
}

const mapDispatchToProps={
  loadInitialData,
}

export default connect(mapStateToProps,mapDispatchToProps)(CardList)

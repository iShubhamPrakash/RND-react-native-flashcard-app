import React, { Component } from 'react'
import { View,Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale


class CardList extends Component {
  state={
    deck:[]
  }

  componentDidMount(){
    console.log("From card component-", this.props);
    this.setState({deck: Object.values(this.props.deck)})
  }

  render() {

    return (
      <View>
        <FlatList
          data={this.state.deck}
          renderItem={({item})=>(
            <ListItem
              key={item.title}
              style={{margin: 16, marginBottom:8 }}
              Component={TouchableScale}
              friction={90}
              tension={100} // These props are passed to the parent component (here TouchableScale)
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
            />
          )}
        />
      </View>
    )
  }
}

export default CardList

// import AsyncStorage from '@react-native-community/async-storage'
import { AsyncStorage } from 'react-native'
import {STORAGE_KEY} from '../utils/constants'

import deck from '../utils/_DB'

export const INITIAL_DATA='INITIAL_DATA'

export const ADD_DECK='ADD_DECK'
export const REMOVE_DECK='REMOVE_DECK'

export const ADD_CARD='ADD_CARD'
export const REMOVE_CARD='REMOVE_CARD'

export const RESET_DATA='RESET_DATA'


const getData = async () => {
  try {
    let value = await AsyncStorage.getItem(STORAGE_KEY)
    // console.log("Asnc val=",value);

    if(value !== null) {
      // value previously stored
      value = await JSON.parse(value)
      return value
    }else{
      return deck
    }
  } catch(e) {
    // error reading value
    return deck
  }
}


export const loadInitialData= ()=> async dispatch =>{
  const data= await getData()
  return dispatch(loadData(data))
}


const loadData= data=>{
  return {
    type: INITIAL_DATA,
    data: data
  }
}

export const addDeck=(newTitle)=>{
 return{
   type: ADD_DECK,
   title: newTitle
 }
}

export const removeDeck=(id)=>{
  return{
    type:REMOVE_DECK,
    id,
  }
}

export const addCardsToDeck=(id,card)=>{
  return{
    type: ADD_CARD,
    id: id,
    card: card
  }
}

export const resetData=()=>{
  return{
    type: RESET_DATA,
    deck
  }
}
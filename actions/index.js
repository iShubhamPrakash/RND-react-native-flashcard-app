import deck from '../utils/_DB'

export const INITIAL_DATA='INITIAL_DATA'

export const ADD_DECK='ADD_DECK'
export const REMOVE_DECK='REMOVE_DECK'

export const ADD_CARD='ADD_CARD'
export const REMOVE_CARD='REMOVE_CARD'

export const RESET_DATA='RESET_DATA'

export const loadInitialData=()=>{
  return {
    type: INITIAL_DATA,
    data: deck
  }
}

export const addDeck=(newTitle)=>{
 return{
   type: ADD_DECK,
   title: newTitle
 }
}

export const removeDeck=(id,index)=>{
  return{
    type:REMOVE_DECK,
    id,
    index
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
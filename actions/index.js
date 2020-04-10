import deck from '../utils/_DB'

export const INITIAL_DATA='INITIAL_DATA'

export const ADD_DECK='ADD_DECK'
export const REMOVE_DECK='INITIAL_DECK'

export const ADD_CARD='INITIAL_DATA'
export const REMOVE_CARD='INITIAL_DATA'

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

export const removeDeck=(id)=>{
  return{
    type:REMOVE_DECK,
    id:id
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
    type: RESET_DATA
  }
}
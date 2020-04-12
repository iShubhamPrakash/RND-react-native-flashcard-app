import {
  INITIAL_DATA,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  REMOVE_CARD,
  RESET_DATA
} from '../actions'

const appReducer=(state={},action)=>{
  switch (action.type) {
    case INITIAL_DATA :
      return {
        ...state,
        ...action.data
      }

    case ADD_DECK :
      return {
        [action.title]:{
          title: action.title,
          cards:[]
        },
        ...state,
      }

    case REMOVE_DECK:
      if (action.id in state){
        const {[action.id]:val,...newState} = state  // I liked this ES6 syntax
        // let newState={...state}
        // delete newState[action.id]  // Other way of deleting the key
        return newState
      }
      return state

    case ADD_CARD:
      const {id,card} = action
      return {
        ...state,
        [id]: {
          ...state[id],
          cards: [...state[id].cards,{...card}]
        }

      }

    case REMOVE_CARD:
      const deck={...state}

      deck[action.id].cards.splice(action.index,1)

      return {...deck}

    case RESET_DATA:
      return {...action.deck}

    default:
      return state


  }
}

export default appReducer
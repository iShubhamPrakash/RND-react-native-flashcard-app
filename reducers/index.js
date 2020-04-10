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
        ...state,
        [action.title]:{
          title: action.title,
          cards:[]
        }
      }

    case REMOVE_DECK:
      return {...Object.keys(state).filter(cardName=> cardName !== action.id)}

    case ADD_CARD:
      const {id,card} = action
      return {
        ...state,
        [id]: {
          ...state[id],
          cards: [...state[id].cards,...card]
        }

      }

    case REMOVE_CARD:
      const deck={...state}
      const {id,index}=action

      deck[id].cards.splice(index,1)

      return {...deck}

    case RESET_DATA:
      return {...action.deck}

    default:
      return state


  }
}

export default appReducer
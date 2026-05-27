import { Item } from "../types/Item"

type AddACtion = {
  type: 'add'
  payload: {
    text: string
  }
}

type editTextAction = {
  type: 'editText'
  payload: {
    id: number
    newText: string
  }
}

type ToggleDoneAction = {
  type: 'toggleDone'
  payload: {
    id: number
  }
}

type RemoveAction = {
  type: 'remove'
  payload: {
    id: number
  }
}

type ListActions = AddACtion | editTextAction | ToggleDoneAction | RemoveAction

export const listReducer = (list: Item[], action: ListActions) => {
  switch(action.type) {
    case 'add':
      return [...list, {
      id: list.length,
      text: action.payload.text,
      done: false
    }]
    
    case "editText":
      return list.map(item => {
        if(item.id === action.payload.id) {
          item.text = action.payload.newText
        }
        return item
      })
    
    case "toggleDone":
      return list.map(item => {
        if(item.id === action.payload.id) {
          item.done = !item.done
        }
        return item
      })

    case "remove":
      return list.filter(item => item.id !== action.payload.id)

    default: 
      return list
  }
}
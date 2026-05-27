import { useReducer, useState } from "react"
import { Item } from "../types/Item"
import { listReducer } from "../reducers/listReducers"

const Reducers = () => {
  const [list, dispatch] = useReducer(listReducer, [])

  const handleAddClick = () => {
    dispatch({
      type: 'add',
      payload: {
        text: 'Novo item'
      }
    })
  }

  return (
    <div className="">
      <button onClick={handleAddClick}>Adicionar</button>
    </div>
  )
}

export default Reducers
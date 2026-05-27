import { useState } from "react"
import { Item } from "../types/Item"

const Reducers = () => {
  const [list, setList] = useState<Item[]>([])

  const addNewItem = (text: string) => {
    setList([...list, {
      id: list.length,
      text,
      done: false
    }])
  }

  const editItemText = (id: number, newText: string) => {
    setList(
      list.map(item => {
        if(item.id === id) item.text = newText
        return item
      })
    )
  }

  const toggleItem = (id: number) => {
    setList(
      list.map(item => {
        if(item.id === id) item.done = !item.done
        return item
      })
    )
  }

  const removeItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
    )
  }


}

export default Reducers
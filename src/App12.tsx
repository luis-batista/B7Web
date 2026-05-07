import { useState } from "react"
import { todoItem } from "./types/TodoItem"



const Page = () => {
  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<todoItem[]>([
    { id: 1, label: 'Fazer tarefas de casa', checked: false },
    { id: 2, label: 'Comprar o bolo', checked: false }
  ])

  const handleAddBtn = () => {
    if(itemInput === '') return
    setList([ ...list, { id: list.length + 1, label: itemInput, checked: false }])
    setItemInput('')
  }

  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id))
    console.log(id, "item deletado")
  }

  const toggleItem = (id: number) => {
    let newList = [...list]
    
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].checked = !newList[i].checked
      }
    }
    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="text-4xl m-5">Lista de tarefas</div>

      <div className="flex w-full max-w-lg my-3 p-4 gap-2 rounded-md bg-gray-700 border-2 border-white">
        <input type="text" 
        placeholder="O que deseja fazer?"
        className="flex-1 border border-white p-3 text-2xl text-white rounded-md"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        />
        <button className="border border-white text-2xl text-white" onClick={handleAddBtn}>Adicionar</button>
      </div>

      <p className="my-4">{list.length} itens na lista</p>

      <ul className="w-full max-w-lg pl-5">
        {list.map((item) => (
          <li key={item.id}>
            <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-3 h-3 mr-3" />
            {item.label} - <button onClick={() => deleteItem(item.id)} className="text-base m-2 hover:underline">Apagar</button>
          </li>))}
      </ul>

    </div>
  )
}

export default Page
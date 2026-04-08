import { useState } from "react"
import { Person } from "./types/Person"


const Page = () => {
  const [fullName, setFullName] = useState<Person>({ name: '', lastName: '' })

  const handleClearBtn = () => {
    setFullName({name: '', lastName: ''})
  }

  return (
    <div>
      <input type="text"
      placeholder="Nome"
      value={fullName.name}
      onChange={e => setFullName({ ...fullName, name: e.target.value })}
      />

      <input type="text" 
      placeholder="Sobrenome"
      value={fullName.lastName}
      onChange={e => setFullName({ ...fullName, lastName: e.target.value })}
      />

      <p>Seu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>

      <button onClick={handleClearBtn}>Limpar campos</button>

    </div>
  )
}

export default Page
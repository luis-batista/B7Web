import { useEffect, useState } from "react"

const Page = () => {

  const [name, setName] = useState('Luis')
  const [age, setAge] = useState(45)

  useEffect(() => {
    console.log('useEffect Rodando')
  }, [])

  const handleClkChangeName = () => {
    setName('D4ARK')
  }

  const handleClkChangeAge = () => {
    setAge(90)
  }

  return (
    <div>
      <p>Prazer, sou o {name} e tenho {age} anos</p>
      <hr />
      <button onClick={handleClkChangeName} className="mr-2">Mudar para D4ARK</button>
      <button onClick={handleClkChangeAge}>Mudar para 90 anos</button>
    </div>
  )
}

export default Page
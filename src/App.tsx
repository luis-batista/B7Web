import { Person } from "./components/Person"
import { Square } from "./components/Square"
import { Card } from "./components/Card"
import { Condicional } from "./components/Condicional"
import { peopleList } from "./data/peopleList"


const Page = () => {

  const list = peopleList.map(person => <li key={person.id}>{person.nome} - {person.profession}</li>)
  const chemists = peopleList.filter(person => person.profession === 'chemist')

  return (
    <div>
      <h1>Olá, mundo</h1>

      {peopleList.length > 0 &&
            <ul>
              {list}
            </ul>
      }

      {chemists.length > 0 &&
        <>
          <h3>Lista de químicos</h3>
            <ul>
              {chemists.map(person =>
                <li key={person.id}>{person.nome}</li>
              )}
            </ul>
        </>
      }
      
      <Square />
      <Person 
      name = 'Ellon Musk'
      avatar = 'https://images.unsplash.com/photo-1546530967-21531b891dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      roles ={['CEO da Tesla', 'CEO da spaceX', 'CEO da ...']}
      />

      <Person 
      name = 'Ellon Musk'
      avatar = 'https://images.unsplash.com/photo-1546530967-21531b891dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      roles ={['CEO da Tesla', 'CEO da spaceX', 'CEO da ...']}
      />

      <Card>
        <>
        <h3>Olá pessoal!</h3>
        <p>Frase de efeito!</p>
        </>
      </Card>

      <Condicional 
        phrase="Alguma frase TOP" author="Coach de milões"
      />
    </div>
  )
}

export default Page
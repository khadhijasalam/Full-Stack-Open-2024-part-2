import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Display from './Display'







const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum]=useState('')

  const [filteredInput,setFilteredInput]=useState('')
  




const handleSubmit=(event)=>{
  event.preventDefault()
  for(let i=0;i<persons.length;i++){
  if(newName === persons[i].name){

    alert(`${newName} is already added to phonebook`)
    setPersons([...persons])
   

  }else{
    setPersons([...persons,{name:newName,number:newNum}])

    setNewName('')
    setNewNum('')
  }
}
 
}

const handleNameChange=(event)=>{
  console.log(event.target.value)
  setNewName(event.target.value)
}
const handleNumChange=(event)=>{
  console.log(event.target.value)
  setNewNum(event.target.value)
}

const handleFilter=(event)=>{
  console.log(event.target.value)
  setFilteredInput(event.target.value)

}




  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilter={handleFilter} filteredInput={filteredInput}/>

 <h2>Add a new person</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newNum={newNum} handleNumChange={handleNumChange}/>

      <h2>Numbers</h2>

      <Display filteredInput={filteredInput}  persons={persons}/>
     

 

    </div>
  )
}

export default App
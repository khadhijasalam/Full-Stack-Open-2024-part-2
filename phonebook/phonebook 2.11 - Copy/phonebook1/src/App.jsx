import { useState ,useEffect} from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Display from './Display'
import axios from 'axios'










const App = () => {
  
//   axios.get('http://localhost:3001/persons').then((response)=>{console.log(response.data)
//     setPersons(response.data)
// })
  const [persons, setPersons] = useState([
 ])
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum]=useState('')

  const [filteredInput,setFilteredInput]=useState('')
  


useEffect(() => {
  // console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      console.log(response.data)
      setPersons(response.data)
    })
}, [])


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
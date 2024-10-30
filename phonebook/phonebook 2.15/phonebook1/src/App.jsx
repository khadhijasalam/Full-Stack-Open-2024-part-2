import { useState ,useEffect} from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Display from './Display'
import axios from 'axios'
import phoneService from './services/phonebook'







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
  phoneService
  .getAll()
    .then(initialVal => {
      setPersons(initialVal)
    })
}, [])


const handleSubmit=(event)=>{
  event.preventDefault()
  for(let i=0;i<persons.length;i++){
  if(newName === persons[i].name){
    if(window.confirm(`${newName} is already added to phonebook,replace?`)){
      handleUpdate(persons[i].id,newNum)
      // console.log(persons[i].number)
      // console.log(newNum)
      // const person= persons.find(n=>n.id===id)
      // updatedEntry={...persons,}
      // const toChange= persons[i].number


      // const id=persons[i].id
      // const updatedPerson={
      //   ...persons[i],  number: newNumy
      // }
      // console.log(updatedPerson)


      // const id = persons[i].id
      // const url= `http://localhost:3001/persons/${id}`
      


// console.log('yes')

// phoneService.update(id,updatedPerson)
// .then(res=>{
//   setPersons(persons.map(person=>person.id===id?res:))
// })


    }

    // setNewName('')
    //   setNewNum('')
    return setPersons([...persons])
   

  }}
  // else{
    const newPerson={
      name:newName,
      number:newNum

    }
    phoneService.create(newPerson)
    .then(person => {
      setPersons(persons.concat(person))
      setNewName('')
      setNewNum('')
    })


  // }

 
}

const handleUpdate= (id,newNum)=>{
  const updatedPhonebook= persons.map((person)=>{
    if(person.id===id){
      return {...persons,number:newNum}}
      return persons;

  })
const updatedPerson = updatedPhonebook.find(p=> p.id==id)
axios.put(`http://localhost:3001/persons/${id}`,updatedPerson)
.then((res)=>{
console.log(res.data)
console.log(updatedPhonebook)
setPersons(updatedPhonebook)
})


}
const dltPerson=(id,name)=>{
  // console.log('deleted '+id)
  // const url=`http://localhost:3001/persons/${id}`
  // axios.delete(url)
  if(window.confirm(`Delete ${name}`)){
    phoneService.dlt(id)
    .then(()=>(setPersons(persons.filter(p=> p.id!== id))))
  }
   }

// const updateNumber=(id)=>{
//   const url=`http://localhost:3001/persons/${id}`
//   const 
// }

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

      <Display filteredInput={filteredInput}  persons={persons} dltPerson={dltPerson}/>
     

 

    </div>
  )
}

export default App
import phoneService from './services/phonebook'
const NameList=({persons,dltPerson})=>{

//   const dltPerson=(id)=>{
// console.log('deleted '+id)
// const url=`http://localhost:3001/persons/${id}`
// axios.delete(url).then(res=>(setPerson(persons.filter(p=> p.id!== id))))

//   }
  return(
    <>
  
    { persons.map((n)=><p key={n.name}>
      {n.name} {n.number} <button onClick={()=>dltPerson(n.id,n.name)}>delete</button>
      </p>
    )}
    </>
  )

 

}

export default NameList;

const NameList=({persons})=>{

  const dltPerson=(id)=>{
console.log('deleted '+id)
  }
  return(
    <>
  
    { persons.map((n)=><p key={n.name}>
      {n.name} {n.number} <button onClick={()=>dltPerson(n.id)}>delete</button>
      </p>
    )}
    </>
  )

 

}

export default NameList;
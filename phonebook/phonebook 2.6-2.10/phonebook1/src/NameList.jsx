
const NameList=({persons})=>{
  
  return(
    <>
  
    { persons.map((n)=><p key={n.name}>
      {n.name} {n.number}
      </p>
    )}
    </>
  )

 

}

export default NameList;
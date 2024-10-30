//////////////////
const Header=({name})=>{
  console.log(name)
  return(<>
  <h2>{name}</h2>
  </>)

}
///////////////////
const Content=({parts})=>{
  return(
    <>
   
{
parts.map((value,idx)=>(
  
  <Part key={idx} name={value.name} exercise={value.exercises}/> 
))
}</>
  )

}

////////////////
const Part=({name,exercise})=>{
return(
    <>
   <p>{name}: {exercise}</p> 
    </> 
  )
 
  }
  
  ////////////////
function Course({course}){
 
  // console.log(course.name)
const parts=course.parts
  const total = parts.reduce((s, p) => {
    console.log('what is happening', s.exercises, p.exercises)
    return (s+p.exercises)
    
  },0)
console.log(total)
// console.log(total)
  console.log(course)
  return(
    <>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <p><b>Total of {total} exercises</b></p>

    
    </>
  )

}

export default Course;
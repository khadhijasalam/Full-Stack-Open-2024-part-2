/* eslint-disable react/prop-types */
const FilteredName=({persons,filteredInput})=>{
  const fArr= persons.filter(obj=>obj.name.toLowerCase().includes(filteredInput.toLowerCase()))
  console.log(fArr)

  return(
    <>
    {
      fArr.map((n)=><p key={n.name}>
      {n.name} {n.number}
      </p>)
    }

    </>
  )
}
export default FilteredName;
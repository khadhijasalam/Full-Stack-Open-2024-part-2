const Filter=({handleFilter,filteredInput})=>{
  return(
    <>
    <p>filter shown with<input value={filteredInput} onChange={handleFilter}/></p>
    </>
  )
  }
  export default Filter;
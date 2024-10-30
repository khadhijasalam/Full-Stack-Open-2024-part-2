  const PersonForm=({handleSubmit,newName,handleNameChange,newNum,handleNumChange})=>{
    return(
      <div>
        
        <form onSubmit={handleSubmit}>
          
          <div>
            name: <input value={newName}
            onChange={handleNameChange}/>
            
          </div>
          <div>number: <input value={newNum} onChange={handleNumChange}  /></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }
export default PersonForm;
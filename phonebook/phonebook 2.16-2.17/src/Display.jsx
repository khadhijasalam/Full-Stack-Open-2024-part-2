import NameList from './NameList'
import FilteredName from './FilteredName'
const Display=({filteredInput,persons,dltPerson})=>{
  
  if (filteredInput==''){
    return(<NameList persons={persons} dltPerson={dltPerson}/>)
  }else{
    return( <FilteredName persons={persons} filteredInput={filteredInput}/>)
  }
}

export default Display;
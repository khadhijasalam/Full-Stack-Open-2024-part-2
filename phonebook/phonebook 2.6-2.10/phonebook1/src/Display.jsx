import NameList from './NameList'
import FilteredName from './FilteredName'
const Display=({filteredInput,persons})=>{
  
  if (filteredInput==''){
    return(<NameList persons={persons}/>)
  }else{
    return( <FilteredName persons={persons} filteredInput={filteredInput}/>)
  }
}

export default Display;
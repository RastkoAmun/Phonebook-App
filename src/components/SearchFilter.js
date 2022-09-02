const SearchFilter = (props) => {
  return(
    <p>Search <input value={props.value} onChange={props.onChange}/></p>
  )
}

export default SearchFilter;
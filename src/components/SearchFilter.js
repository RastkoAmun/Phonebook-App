const SearchFilter = (props) => {
  return(
    <p>Serach <input value={props.value} onChange={props.onChange}/></p>
  )
}

export default SearchFilter;
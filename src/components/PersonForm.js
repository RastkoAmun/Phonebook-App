const PersonForm = (props) => {
  return(
    <form>
      <div>
        name: <input className='name' value={props.nameValue} onChange={props.onChange}/>
      </div>
      <div>
        number: <input className='number' value={props.numberValue} onChange={props.onChange}/>
      </div>
      <div>
        <button type='submit' onClick={props.addPersonFunction}>add</button>
      </div>
    </form>
  )
}

export default PersonForm;
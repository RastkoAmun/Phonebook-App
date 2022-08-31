import Contact from './Contact'

const ListOfContacts = ({contacts}) => {
  return(
    <div>
      {contacts.map(contact => 
        <Contact name={contact.name} phoneNumber={contact.number} key={contact.name}/>)}
    </div>
  )
}

export default ListOfContacts;
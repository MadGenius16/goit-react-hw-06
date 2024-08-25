import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

const ContactList = ({contacts, deleteContact}) => {
  return (
      
    <div className={css.wrap}>
            {contacts.map((contact) => (
              <Contact 
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                deleteContact={deleteContact} 
              />
            ))}
        </div>
  )
}

export default ContactList
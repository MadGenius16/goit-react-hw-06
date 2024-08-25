import { nanoid } from 'nanoid'
import css from "./App.module.css"
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import SearchBox from "./SearchBox/SearchBox"
import dataFromServer from "./contacts.json"
import { useState, useEffect } from "react";


function App() {

  const [contacts, setContacts] =useState(
    JSON.parse(localStorage.getItem("contacts")) ?? dataFromServer
  )

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const addContact = ({ name, number }) => {
    setContacts([...contacts, {  name: name, number: number, id: nanoid() }])
  }

const deleteContact = (id) => {
  setContacts(contacts.filter((contact) => contact.id !== id));
};

const[value, setValue]= useState("")

const handleFilter=(event) => {
 const value= event.target.value
 setValue(value)
}

const filteredContact = contacts.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm 
      addContact={addContact}
      />
      <SearchBox 
      value={value} 
      handleFilter={handleFilter} 
      />
      <ContactList
      contacts={filteredContact} 
      deleteContact={deleteContact}
       />
    </div>
  )
}

export default App

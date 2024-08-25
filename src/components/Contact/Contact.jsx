import { FaUser } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import css from './Contact.module.css'

const Contact = ({name, number, id, deleteContact}) => {

  const handleClick = () =>{
    deleteContact(id);
  };


  return (
    <div className={css.container}>
      <div className={css.contactWrap}>
        <p className={css.field}><FaUser />{name}</p>
        <p className={css.field}><IoCall />{number}</p>
      </div>
      <button onClick={handleClick} className={css.deleteBtn} type="button">Delete</button>
    </div>
  )
}

export default Contact
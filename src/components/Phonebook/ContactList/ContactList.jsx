import css from "../Phonebook.module.css"
import PropTypes from 'prop-types'
import { AiFillDelete, AiOutlineContacts } from "react-icons/ai";;

export default function ContactList({ items, removeContact }) {
    const element = items.map(({name, phone, id}) => {
      return <li className={css.contacts__list} key={id}>{name}: {phone}
               
                <span className={css.remove} onClick={() => removeContact(id)}><AiFillDelete /></span>
              </li>
    })
  return (
    <>
      <h2 className={css.header}>Contacts list <AiOutlineContacts/></h2>
      <ul>{element}</ul>
    </>
  )
}

ContactList.propTypes = {
  removeContact:  PropTypes.func.isRequired, 
  items: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
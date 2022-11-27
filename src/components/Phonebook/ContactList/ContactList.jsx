import css from "../Phonebook.module.css"
import PropTypes from 'prop-types'

export default function ContactList({ items, removeContact }) {
    const element = items.map(({name, phone, id}) => {
        return <li key={id}>{name}: {phone} <span className={css.remove} onClick={() => removeContact(id)}>Delete</span></li>
    })
  return (
    <ul>{element}</ul>
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
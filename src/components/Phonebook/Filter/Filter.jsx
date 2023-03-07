import PropTypes from 'prop-types'
import css from "../Phonebook.module.css"


export const Filter = ({handleChange, filter }) => {
  
  
    return (
      <div>
            <h2 className={css.header}>Filter</h2>   
            <p className={css.contact__filter}>Find contacts by name:</p>
            <input type="text" name="filter" value={filter} onChange={handleChange}></input>
        </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired, 
};

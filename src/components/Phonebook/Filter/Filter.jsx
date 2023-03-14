import css from "../Phonebook.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';


export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value))
    };
   
    return (
      <div>
            <h2 className={css.header}>Filter</h2>   
            <p className={css.contact__filter}>Find contacts by name:</p>
            <input type="text" name="filter" value={filter} onChange={handleChange}></input>
        </div>
  )
}

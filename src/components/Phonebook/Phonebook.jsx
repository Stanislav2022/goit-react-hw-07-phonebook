import css from "./Phonebook.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';




export default function Phonebook() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onAddContacts = (data) => {
          if (isDuplicate(data)) {
            return alert(`${data.name} - is already in contacts`)
        }
        const action = addContact(data);
        dispatch(action);
    };

    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value))
    };

    const isDuplicate = ({name}) => {
        const result = contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        return result
    }

    const getFiltereContacts = () => {
        if (!filter) {
            return contacts;
        }
        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name, number }) => {
            const normalizedName = name.toLocaleLowerCase();
            const normalizedNumber = number.toLocaleLowerCase();
            const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
            return result;
        })
        return filteredContacts;
    }

    const filterContacts = getFiltereContacts();

    return (
        <>
            <div className={css.form}>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={onAddContacts} />
            </div>
            <div className={css.form}>
                <h2>Contacts</h2>
                <Filter filter={ filter} handleChange={handleChange}  />
                <ContactList items={filterContacts} removeContact={onRemoveContact} />
            </div>
       </>
    )
}

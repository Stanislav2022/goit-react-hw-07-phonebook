import css from "./Phonebook.module.css";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, removeContact } from "redux/contacts/contacts-operation";
import { setFilter } from 'redux/filter/filter-slice';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';
import { useEffect } from "react";


export default function Phonebook() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    fetchContacts();

    const onAddContacts = (data) => {
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

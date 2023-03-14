import { useDispatch } from 'react-redux';
import { fetchContacts } from "redux/contacts/contacts-operation";
import { useEffect } from "react";
import css from "./Phonebook.module.css";
import { ContactForm }  from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const Phonebook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    fetchContacts();

    return (
        <>
            <div className={css.form}>
                <h1 className={css.header}>Phonebook</h1>
                <ContactForm />
                <Filter />
                <ContactList/>
            </div>
       </>
    )
}

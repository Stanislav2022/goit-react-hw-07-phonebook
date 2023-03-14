import React from 'react'
import css from "../Phonebook.module.css"
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { addContact } from 'redux/contacts/contacts-operation'
import { AiOutlineUserAdd } from "react-icons/ai";;



export const ContactForm = () => {
const dispatch = useDispatch()
    

    const nameId = nanoid();
    const phoneId = nanoid();


  const handleSubmit = event => {
      event.preventDefault();
      const { name, phone } = event.target.elements;
    const form = event.target;
    dispatch(addContact({name: name.value, phone: phone.value}));
    form.reset();
  };


    return (
        <form onSubmit={handleSubmit}>
            <h2 className={css.header}>Add contacts</h2>
            <div className={css.input}>
                <div>
                <label htmlFor={nameId}> Name </label>
                <input
                    id={nameId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                </div>
                <div>
                    <label htmlFor={phoneId} > Number </label>
                    <input
                        id={phoneId}
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    />
                </div>
            </div>
            <button> <AiOutlineUserAdd /> Add contact</button>
        </form>
        



    )
}




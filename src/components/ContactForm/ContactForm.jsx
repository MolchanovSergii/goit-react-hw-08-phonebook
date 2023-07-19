// import React, { useState } from 'react';
import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations';

import { StyledForm, StyledInput, StyledButton } from './ContactFormStyled';

const ContactForms = () => {
  // const contactsList = useSelector(state => state.contacts.items);

  // const dispatch = useDispatch();

  const uniqueId = nanoid();

  const handleSubmitForm = event => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.number.value);

    // const isDuplicateName = contactsList.some(contacts =>
    //   contacts.name.toLowerCase().includes(name.toLowerCase())
    // );

    // if (isDuplicateName) {
    //   alert(`${name} is alredy to contacts`);
    //   return;
    // }

    // const contact = { name, number };
    // form.reset();

    // dispatch(addContact(contact));
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <label htmlFor={uniqueId}>
        Name
        <StyledInput
          type="text"
          name="name"
          // value={name}
          // onChange={handleChange}
          id={uniqueId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={uniqueId}>
        Number
        <StyledInput
          type="tel"
          name="number"
          // value={number}
          // onChange={handleChange}
          id={uniqueId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForms;

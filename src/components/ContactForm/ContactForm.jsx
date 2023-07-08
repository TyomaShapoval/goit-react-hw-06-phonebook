import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid'
import Notiflix from 'notiflix';

import { addContact } from '../../redux/redusers/contacts';
import {
  Input,
  AddButton,
  Form,
  Title
} from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.find(existingContact => existingContact.name === name)) {
      Notiflix.Notify.failure(`Contact ${name} already exists`);
    return
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={name}
        />
        <Input
          type="tel"
          name="number"
          placeholder="Number"
          onChange={handleChange}
          value={number}
        />
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </>
  );
};

export default ContactForm;

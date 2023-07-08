import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/redusers/contacts';
import { getFilterValue } from '../../redux/redusers/filter'
import {
  ContactsList,
  ListItem,
  DeleteBtn,
  Title
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = useMemo(() => () => {
    const normalizedFilter = filterValue.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterValue]);

  const filteredContacts = getFilteredContacts();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <Title>Contacts</Title>
      <ContactsList>
        {filteredContacts.length ? (
          filteredContacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              <p>
                {name}: {number}
              </p>
              <DeleteBtn onClick={() => handleDelete(id)} type="button">
                Delete
              </DeleteBtn>
            </ListItem>
          ))
        ) : (
          <p>No contacts</p>
        )}
      </ContactsList>
    </>
  );
};

export default ContactList;

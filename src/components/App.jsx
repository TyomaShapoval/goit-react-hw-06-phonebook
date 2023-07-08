import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { WrapperContent } from './App.styled';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WrapperContent>
          <ContactForm />
          <Filter />
          <ContactList />
        </WrapperContent>
      </PersistGate>
    </Provider>
  );
};

